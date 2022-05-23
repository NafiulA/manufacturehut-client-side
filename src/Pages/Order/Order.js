import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Order = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const { data: product, isLoading, refetch } = useQuery("productData", () => fetch(`http://localhost:5000/product/${id}`).then(res => res.json()));
    const { register, handleSubmit, formState: { errors } } = useForm();
    if (isLoading) {
        return <Loading></Loading>
    };

    if (errors) {
        if (errors?.quantity) {
            toast.error(`${errors.quantity.message}`, { id: "stockError" });
        }
    }
    const onSubmit = data => {
        const quantity = data.quantity;
        const body = {
            productId: product._id,
            name: product.name,
            userEmail: user.email,
            quantity: quantity,
            price: product.price * data.quantity
        };
        fetch('http://localhost:5000/order', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json()).then(data => {
                if (data.insertedId) {
                    fetch(`http://localhost:5000/updateQuantity/${product._id}?quantity=${quantity}`, {
                        method: "PUT",
                        headers: {
                            "Content-type": "application/json"
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount) {
                                refetch();
                            }
                        })
                }
            })

    }
    return (
        <div className='min-h-screen w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center'>
            <div>
                <img className='w-80 mx-auto' src={product.img} alt="" />
                <div className='p-5'>
                    <p>id: {id}</p>
                    <p className='py-2 text-3xl font-semibold'>{product.name}</p>
                    <p className='py-2'>{product.description}</p>
                    <p className='text-lg'>Price: ${product.price}<span>/unit</span></p>
                    <p className='text-lg'>Available: {product.stock} pcs</p>
                    <p className='text-lg'>Min Purchase: {product.minPurchase}</p>
                </div>
            </div>
            <div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-sm">
                            <label className="label">
                                <span className="label-text text-xl">Order Quantity</span>
                            </label>
                            <input {...register("quantity", {
                                valueAsNumber: true,
                                required: "Order quantity in required", min: {
                                    value: `${product.minPurchase}`,
                                    message: "Minimum purchase amount required"
                                }, max: {
                                    value: `${product.stock}`,
                                    message: "Stock not available"
                                }
                            })} type="number" defaultValue={`${product.minPurchase}`} className="input input-bordered w-full max-w-sm" />
                            <input type="submit" value="Order" className="my-5 btn btn-accent w-full max-w-xs" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;