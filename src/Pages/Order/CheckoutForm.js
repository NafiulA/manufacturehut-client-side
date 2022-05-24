import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const CheckoutForm = ({ order }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState();
    const { _id, userName, userEmail } = order;
    useEffect(() => {
        fetch("http://localhost:5000/createPaymentIntent", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [order])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        };
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        };

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            toast.error(`${error.message}`, { id: "carderror" })
        };
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: userEmail,
                    },
                },
            },
        );

        if (intentError) {
            toast.error(`${intentError.message}`, { id: "intentError" });
        }
        else {
            fetch(`http://localhost:5000/order/${_id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify({ transactionId: paymentIntent.id })
            }).then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        toast.success("Congrats! Payment succesfull", { id: "paymentSuccess" });
                        navigate(from, { replace: true });
                    }
                })
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-sm btn-accent my-5' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;