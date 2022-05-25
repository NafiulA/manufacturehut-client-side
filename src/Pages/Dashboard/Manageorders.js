import { signOut } from 'firebase/auth';
import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import OrdersRow from './OrdersRow';

const Manageorders = () => {
    const { data: orders, isLoading, refetch } = useQuery("allorders", () => fetch("https://radiant-journey-27720.herokuapp.com/order", {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => {
        if (res.status === 403 || res.status === 401) {
            toast.success(`${res?.message}`, { id: "adminError" })
            signOut(auth);
            localStorage.removeItem("accessToken");
        }
        return res.json();
    }));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
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