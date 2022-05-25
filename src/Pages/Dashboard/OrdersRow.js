import React from 'react';
import toast from 'react-hot-toast';

const OrdersRow = ({ index, order, refetch }) => {

    const handleShipment = id => {
        fetch(`http://localhost:5000/ship/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    toast.success("Order Shipped", { id: "shipped" });
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.userEmail}</td>
            <td>{order.name}</td>
            <td>{(order.payment === "unpaid") ? order.payment : order.shipment}</td>
            <td>{(order.payment === "unpaid") ? "N/A" : (order.shipment === "pending") ? <button onClick={() => { handleShipment(order._id) }} className='btn btn-xs btn-primary'>Ship</button> : order.shipment}</td>
        </tr>
    );
};

export default OrdersRow;