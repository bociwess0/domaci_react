import React from 'react';
import Product from '../Product/Product';
import './ProductList.css';

export default function ProductList(props) {
    const {products} = props;
    return (
        <div className='product_list'>
            <div className='list'>
                <div className='list_heading'>
                    <h1>Products</h1>
                </div>
                {products.map((product) => (
                    <Product key={product.id} product = {product}></Product>
                ))}
            </div>
            <div className='details'></div>
        </div>
    )
}
