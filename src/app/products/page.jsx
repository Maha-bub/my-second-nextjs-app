import React from 'react';
import ProductCardPage from '../components/ProductCard';

const getProducts = async () => {
    const res = await fetch(`http://localhost:5000/products`, { cache: 'force-cache' })
    if (!res.ok) {
        throw new Error('Failed to fetch products.')
    }
    return res.json()
}

const ProductPage = async () => {
    const products = await getProducts()
    return (
        <div>
            <h3>{products.length}</h3>
            <div className='grid grid-cols-3 gap-4'>
                {
                    products.map(product => <ProductCardPage key={product.id} product={product}></ProductCardPage>)
                }
            </div>
        </div>
    );
};

export default ProductPage;