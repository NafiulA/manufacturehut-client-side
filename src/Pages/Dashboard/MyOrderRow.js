import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const MyOrderRow = ({ index, order, refetch }) => {
    const navigate = useNavigate()
    const handlePayment = id => {
        navigate(`/dashboard/checkout/${id}`)
    }
    const handleCancel = id => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success("Cancelled Successfully", { id: "orderCancel" });
                    refetch();
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.name}</td>
            <td>{order.quantity}</td>
            <td>{order.price}</td>
            <td>{(order.payment === "unpaid") ? <button onClick={() => { handlePayment(order._id) }} className='btn btn-xs btn-accent'>Pay</button> : <p className='text-accent'> {order.transactionId}</p>}</td>
            <td>
                {order.transactionId ? "N/A" : <button onClick={() => { handleCancel(order._id) }} className='btn btn-xs btn-secondary'>Cancel</button>}
            </td>
        </tr>
    );
};

export default MyOrderRow;