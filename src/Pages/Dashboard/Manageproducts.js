import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductDeleteModal from './ProductDeleteModal';
import ProductRow from './ProductRow';

const Manageproducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);
    const { data: products, isLoading, refetch } = useQuery("products", () => fetch("https://radiant-journey-27720.herokuapp.com/products").then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Price/unit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => <ProductRow
                        key={product._id}
                        product={product}
                        setDeleteProduct={setDeleteProduct}></ProductRow>)}
                </tbody>
            </table>
            {deleteProduct && <ProductDeleteModal
                deleteProduct={deleteProduct}
                refetch={refetch}
                setDeleteProduct={setDeleteProduct}></ProductDeleteModal>}
        </div>
    );
};

export default Manageproducts;