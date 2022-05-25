import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyOrderRow = ({ index, order, setOrderCancel }) => {
    const navigate = useNavigate()
    const handlePayment = id => {
        navigate(`/dashboard/checkout/${id}`)
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.name}</td>
            <td>{order.quantity}</td>
            <td>{order.price}</td>
            <td>{(order.payment === "unpaid") ? <button onClick={() => { handlePayment(order._id) }} className='btn btn-xs btn-accent'>Pay</button> : <p className='text-accent'> {order.transactionId}</p>}</td>
            <td>
                {order.transactionId ? "N/A" : <label htmlFor="OrderCancelModal" onClick={() => { setOrderCancel(order) }} className="btn btn-xs btn-secondary">Cancel</label>}
            </td>
        </tr>
    );
};

export default MyOrderRow;