import React from 'react';

const ProductRow = ({ product, setDeleteProduct }) => {
    return (
        <tr>
            <td>
                <img className='w-8' src={product.img} alt="" />
            </td>
            <td>{product.name}</td>
            <td>{product.stock}</td>
            <td>{product.price}</td>
            <td>
                <label onClick={() => { setDeleteProduct(product) }} htmlFor="productDeleteModal" className="btn btn-xs btn-secondary">Delete</label>
            </td>
        </tr>
    );
};

export default ProductRow;