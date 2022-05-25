import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const Addreview = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    if (errors) {
        if (errors?.review) {
            toast.error(`${errors.review.message}`, { id: "reviewError" });
        }
        if (errors?.rating) {
            toast.error(`${errors.rating.message}`, { id: "ratingError" });
        }
    }

    const onSubmit = data => {
        const body = {
            userName: user.displayName,
            userEmail: user.email,
            review: data.review,
            rating: data.rating
        };
        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    reset();
                    toast.success("Review Posted", { id: "review" });
                }
            })

    }
    return (
        <div className='p-5'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text text-xl">Review</span>
                    </label>
                    <input {...register("review", {
                        required: "Review description is required"
                    })} type="text" className="input input-bordered w-full max-w-sm" />
                    <label class="label">
                        <span class="label-text">Give a rating from 1 to 5</span>
                    </label>
                    <select {...register("rating", { required: "Rating is required" })} class="select select-bordered w-full max-w-sm">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <input type="submit" value="Post review" className="my-5 btn btn-accent w-full max-w-xs" />
                </div>
            </form>
        </div>
    );
};

export default Addreview;