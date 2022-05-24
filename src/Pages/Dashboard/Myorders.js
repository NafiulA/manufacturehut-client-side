import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MyOrderRow from './MyOrderRow';

const Myorders = () => {
    const [user] = useAuthState(auth);
    const { data: orders, isLoading, refetch } = useQuery("myorders", () => fetch(`http://localhost:5000/myorder/${user.email}`, {
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
        <div class="overflow-x-auto">
            <table class="table w-full">
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
                        refetch={refetch}
                    ></MyOrderRow>)}
                </tbody>
            </table>
        </div>
    );
};

export default Myorders;