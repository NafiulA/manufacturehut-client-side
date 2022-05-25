import React from 'react';
import toast from 'react-hot-toast';

const ProductDeleteModal = ({ deleteProduct, refetch, setDeleteProduct }) => {
    const { name, _id } = deleteProduct;
    const handleDelete = id => {
        fetch(`https://radiant-journey-27720.herokuapp.com/product/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success("Product Deleted", { id: "ProductDelete" });
                    setDeleteProduct(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="productDeleteModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to delete {name}?</h3>
                    <div className="modal-action">
                        <button onClick={() => { handleDelete(_id) }} className='btn btn-xs btn-accent'>Delete</button>
                        <label htmlFor="productDeleteModal" className="btn btn-xs btn-nuetral">Cancel</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDeleteModal;