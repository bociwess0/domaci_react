import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data';
import ProductList from '../ProductList/ProductList';
import './ProductDetails.css';

export default function Product(props) {
    const {id} = useParams();
    const {products} = data;

    const findProduct = (id) => {
        for(let i = 0; i < products.length; i++){
            if(products[i].id === +id){
                return products[i];
            }
        }
    }

    const product = findProduct(id);

    return (
        <div className='product-details' >
            <ProductList products={products}></ProductList>
            <div className='details'>
                <h1>Details</h1>
                <img src={product.image}/>
                <p>Brand: {product.brand}</p>
                <p>Model: {product.model}</p>
                <p>Price: {product.price}$</p>
            </div>
        </div>
    )
}