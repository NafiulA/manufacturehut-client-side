import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MyOrderRow from './MyOrderRow';
import OrderCancelModal from './OrderCancelModal';

const Myorders = () => {
    const [user] = useAuthState(auth);
    const [orderCancel, setOrderCancel] = useState(null);
    const { data: orders, isLoading, refetch } = useQuery("myorders", () => fetch(`https://radiant-journey-27720.herokuapp.com/myorder/${user.email}`, {
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
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Payment</th>
                        <th>Cancellation</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => <MyOrderRow key={order._id}
                        order={order}
                        index={index}
                        setOrderCancel={setOrderCancel}
                    ></MyOrderRow>)}
                </tbody>
            </table>
            {orderCancel && <OrderCancelModal setOrderCancel={setOrderCancel}
                orderCancel={orderCancel}
                refetch={refetch}></OrderCancelModal>}
        </div>
    );
};

export default Myorders;