import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import OrdersRow from './OrdersRow';

const Manageorders = () => {
    const { data: orders, isLoading, refetch } = useQuery("allorders", () => fetch("http://localhost:5000/order", {
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
                        <th>User Email</th>
                        <th>Product</th>
                        <th>Status</th>
                        <th>Shipment</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => <OrdersRow key={order._id}
                        index={index}
                        order={order}
                        refetch={refetch}></OrdersRow>)}
                </tbody>
            </table>
        </div>
    );
};

export default Manageorders;