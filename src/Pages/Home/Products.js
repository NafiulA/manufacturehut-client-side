import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, [])
    return (
        <div className='my-6'>
            <h3 className='text-3xl text-center py-5'>Our Products</h3>
            <div className='w-full md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-content-center'>
                {products.map(product => <ProductsCard
                    key={product._id}
                    product={product}></ProductsCard>)}
            </div>
        </div>
    );
};

export default Products;