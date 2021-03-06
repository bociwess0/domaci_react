import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

export default function Product(props) {
    const {product} = props;
    return (
        <Link to={`/products/${product.id}`}>
            <div className='product_type'>
            <div className='product_description'>
                <h2 className='brand'>{product.brand}</h2>
                <h3 className='model'>{product.model}</h3>
                <h3 className='price'>{product.price}</h3>
            </div>
            <div className='product_image'>
                <img className='phone_image' src={product.image}></img>
            </div>
            </div>
        </Link>
    )
}
