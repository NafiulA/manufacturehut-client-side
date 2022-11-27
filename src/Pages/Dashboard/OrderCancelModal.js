import React from 'react';
import toast from 'react-hot-toast';

const OrderCancelModal = ({ orderCancel, setOrderCancel, refetch }) => {
    const handleCancel = id => {
        fetch(`https://manufacturehut.onrender.com/order/${id}`, {
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
                    setOrderCancel(null);
                }
            });
    }
    return (
        <div>
            <input type="checkbox" id="OrderCancelModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to cancel the order for {orderCancel.name}?</h3>
                    <div className="modal-action">
                        <button onClick={() => { handleCancel(orderCancel._id) }} className='btn btn-xs btn-accent'>Yes</button>
                        <label htmlFor="OrderCancelModal" className="btn btn-xs btn-neutral">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCancelModal;