import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [token] = useToken(user || googleUser);
    useEffect(() => {
        if (token) {
            toast.success("Login Successful", { id: "login" });
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

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (error) {
        toast.error(`${error.message}`, { id: "firebaseError" });
    }

    const email = watch("email", "");
    const handleResetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            if (resetError) {
                toast.error(`${resetError.message}`, { id: "resetError" })
            }
            else {
                toast.success("Password reset email sent!", { id: "resetEmailSent" });
            }
        }
        else {
            toast.error("Please provide an email!", { id: "resetEmail" });
        }
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
                            <label className="label">
                                <span onClick={handleResetPassword} className="label-text-alt cursor-pointer hover:text-primary">Forgot Password?</span>
                            </label>
                        </div>
                        <input type="submit" className="btn btn-accent w-full max-w-xs" value="Login" />
                    </form>
                    <p className='text-center text-sm'>New to ManufactureHut? <span
                        onClick={() => { navigate("/signup") }} className='text-accent cursor-pointer'>
                        Create new account</span></p>
                    <div className="divider">OR</div>
                    <div>
                        <button onClick={handleGoogleLogin} className="btn btn-outline w-full btn-accent">Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;