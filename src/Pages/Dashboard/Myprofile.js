import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const Myprofile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [storedData, setStoredData] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/user/${user.email}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setStoredData(data);
            })
    }, [user])

    if (errors) {
        if (errors?.education) {
            toast.error(`${errors.education.message}`, { id: "educationError" });
        }
        if (errors?.phone) {
            toast.error(`${errors.phone.message}`, { id: "phoneError" });
        }
        if (errors?.location) {
            toast.error(`${errors.location.message}`, { id: "locationError" })
        }
        if (errors?.linkedin) {
            toast.error(`${errors.linkedin.message}`, { id: "linkedinError" })
        }
    }

    const onSubmit = data => {
        const body = {
            name: user.displayName,
            education: data.education,
            location: data.location,
            phone: data.phone,
            linkedin: data.linkedin
        }
        fetch(`http://localhost:5000/profile/${user.email}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast("Profile updated", { id: "profile" });
                }
            })
    }
    return (
        <div className='p-5'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text text-xl">Name</span>
                    </label>
                    <input {...register("name")} type="text" disabled defaultValue={`${user.displayName}`} className="input input-bordered w-full max-w-sm" />
                    <label className="label">
                        <span className="label-text text-xl">Email</span>
                    </label>
                    <input {...register("email"
                    )} type="email" defaultValue={`${user.email}`} disabled className="input input-bordered w-full max-w-sm" />
                    <label className="label">
                        <span className="label-text text-xl">Education</span>
                    </label>
                    <input {...register("education", {
                        required: "Education is required"
                    })} type="text" defaultValue={storedData?.education} className="input input-bordered w-full max-w-sm" />
                    <label className="label">
                        <span className="label-text text-xl">Phone</span>
                    </label>
                    <input {...register("phone", {
                        valueAsNumber: true,
                        required: "Phone number is required"
                    })} type="number" defaultValue={storedData?.phone} className="input input-bordered w-full max-w-sm" />
                    <label className="label">
                        <span className="label-text text-xl">Location</span>
                    </label>
                    <input {...register("location", {
                        required: "Location is required"
                    })} defaultValue={storedData?.location} type="text" className="input input-bordered w-full max-w-sm" />
                    <label className="label">
                        <span className="label-text text-xl">LinkedIn</span>
                    </label>
                    <input {...register("linkedin", {
                        required: "linkedin is required"
                    })} defaultValue={storedData?.linkedin} type="url" className="input input-bordered w-full max-w-sm" />
                    <input type="submit" value="Save" className="my-5 btn btn-accent w-full max-w-xs" />
                </div>
            </form>

        </div>
    );
};

export default Myprofile;