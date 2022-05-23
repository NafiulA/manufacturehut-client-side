import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { sendEmailVerification } from 'firebase/auth';
import useToken from '../../Hooks/useToken';
import auth from '../../firebase.init';


const Signup = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user || googleUser);
    useEffect(() => {
        if (token) {
            toast.success("Signup Successful!", { id: "signup" });
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    if (errors.email || errors.password) {
        if (errors?.email) {
            toast.error(`${errors.email.message}`, { id: "emailError" });
        }
        if (errors?.password) {
            toast.error(`${errors.password.message}`, { id: "passError" })
        }
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        await sendEmailVerification(auth.currentUser);
        toast("Verification Email sent! Please verify!", { id: "verifyEmail" });
    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    if (error) {
        toast.error(`${error.message}`, { id: "firebaseError" });
    }
    if (updateError) {
        toast.error(`${updateError.message}`, { id: "updateError" });
    }

    const handleGoogleLogin = () => {
        signInWithGoogle();
        if (googleLoading) {
            return <Loading></Loading>
        }
        if (googleError) {
            toast.error(`${googleError.message}`, { id: "googleError" })
        }
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card w-4/5 max-w-sm bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-semibold text-xl">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", {
                                required: "Name is Require"
                            })} type="text" placeholder="Your Full Name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", {
                                required: "Email is Require", pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "Invalid email"
                                }
                            })} type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: "Password is required", minLength: {
                                    value: 8,
                                    message: "Please use at least 8 character"
                                }
                            })} type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <input type="submit" className="btn btn-accent mt-5 w-full max-w-xs" value="Sign Up" />
                    </form>
                    <p className='text-center text-sm'>Already have an account? <span
                        onClick={() => { navigate("/signup") }} className='text-accent cursor-pointer'>
                        Please Log In</span></p>
                    <div className="divider">OR</div>
                    <div>
                        <button onClick={handleGoogleLogin} className="btn btn-outline w-full btn-accent">Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;