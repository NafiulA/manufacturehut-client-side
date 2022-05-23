import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsCard = ({ product }) => {
    const navigate = useNavigate();
    const { _id, img, name, description, price, stock, minPurchase } = product;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body items-start">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Price: ${price}<span>/unit</span></p>
                <p>Available: {stock} pcs</p>
                <p>Min Purchase: {minPurchase}</p>
                <div className="card-actions">
                    <button onClick={() => { navigate(`/order/${_id}`) }} className="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;