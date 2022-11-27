import { signOut } from 'firebase/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const Addproduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    if (errors) {
        if (errors.name) {
            toast.error(`${errors.name.message}`, { id: "nameError" });
        }
        if (errors.description) {
            toast.error(`${errors.description.message}`, { id: "descriptionError" });
        }
        if (errors.stock) {
            toast.error(`${errors.stock.message}`, { id: "stockError" });
        }
        if (errors.price) {
            toast.error(`${errors.price.message}`, { id: "priceError" });
        }
        if (errors.minPurchase) {
            toast.error(`${errors.minPurchase.message}`, { id: "minpurchaseError" });
        }
        if (errors.img) {
            toast.error(`${errors.img.message}`, { id: "imgError" });
        }
    }


    const onSubmit = data => {
        const body = {
            name: data.name,
            description: data.description,
            price: data.price,
            stock: data.stock,
            minPurchase: data.minPurchase,
            img: data.img
        }

        fetch('https://manufacturehut.onrender.com/product', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(body)
        })
            .then(res => {
                if (res.status === 403 || res.status === 401) {
                    toast.success(`${res?.message}`, { id: "adminError" })
                    signOut(auth);
                    localStorage.removeItem("accessToken");
                }
                return res.json()
            })
            .then(data => {
                if (data.insertedId) {
                    reset();
                    toast.success("Product added", { id: "productAdd" });
                }
            })
    }
    return (
        <div className='p-5'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text text-lg">Product Name:</span>
                    </label>
                    <input {...register("name", {
                        required: "Product name is required"
                    })} type="text" placeholder="Product Name" className="input input-bordered w-full max-w-sm" />
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text text-lg">Product Description:</span>
                    </label>
                    <input {...register("description", {
                        required: "Product description is required"
                    })} type="text" placeholder="Product description" className="input input-bordered w-full max-w-sm" />
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text text-lg">Product Price/unit:</span>
                    </label>
                    <input {...register("price", {
                        valueAsNumber: true,
                        required: "Price is required"
                    })} type="number" placeholder="Price/unit" className="input input-bordered w-full max-w-sm" />
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text text-lg">Product Stock:</span>
                    </label>
                    <input {...register("stock", {
                        valueAsNumber: true,
                        required: "Stock amount is required"
                    })} type="number" placeholder="Product Stock" className="input input-bordered w-full max-w-sm" />
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text text-lg">Min Purchase Amount:</span>
                    </label>
                    <input {...register("minPurchase", {
                        valueAsNumber: true,
                        required: "Min purchase amount is required is required"
                    })} type="number" placeholder="Min purchase amount" className="input input-bordered w-full max-w-sm" />
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text text-lg">Image</span>
                    </label>
                    <input {...register("img", { required: "Image is required" })} type="url" className="input input-bordered w-full max-w-sm" />
                </div>
                <input type="submit" value="Add Product" className="input input-bordered w-full max-w-xs" />
            </form>
        </div>
    );
};

export default Addproduct;