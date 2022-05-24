import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L2upaH7CX4NnBUMD0AUdwkFl2PPFvm0gkTSgHwWEjNOeMiVQFSCFqg6GN4ELTHywaqmOQe3oft22aUifTePF6d100e6YsRLZH');


const Checkout = () => {
    const { id } = useParams();
    const { data: order, isLoading } = useQuery(["order", id], () => fetch(`http://localhost:5000/order/${id}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='min-h-screen w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center'>
            <div>
                <p>Product Name: {order.name}</p>
                <p>Ordered By: {order.userName}</p>
                <p>Orderer Email: {order.userEmail}</p>
                <p>Order Quantity: {order.quantity}</p>
                <p>Total Price: {order.price}</p>
                <p>Delivary Address: {order.address}</p>
            </div>
            <div>
                <h4 className='text-lg my-5'>Payment information</h4>
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
            </div>
        </div>
    );
};

export default Checkout;