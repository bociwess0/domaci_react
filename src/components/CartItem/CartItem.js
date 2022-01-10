import React, { useState } from 'react'
import './CartItem.css';
import data from '../../data';
export default function CartItem(props) {
    const {cartItem} = props;

    const removeItem = (cartItem) => {
        data.cart.splice(data.cart.indexOf(cartItem),1);
        document.getElementById(cartItem.id).style.display = 'none';
        console.log(cartItem);
    }


    
    return (
        <div className='cartItem' id={cartItem.id}>
            <div className='item_wrapper'>
                <p>{cartItem.brand}</p>
            </div>
            <div className='item_wrapper'>
                <p>{cartItem.model}</p>
            </div>
            <div className='item_wrapper'>
                <p>{cartItem.ram}</p>
            </div>
            <div className='item_wrapper'>
                <p>{cartItem.color}</p>
            </div>
            <div className='item_wrapper'>
                <p>{cartItem.amount}</p>
            </div>
            <div className='item_wrapper'>
                <p>{cartItem.price}</p>
            </div>
            <div className='item_wrapper'>
                <p>{cartItem.total}</p>
            </div>
            <div className='item_wrapper'>
            <button type="submit" class="btn btn-primary" onClick={()=>removeItem(cartItem)} >Delete</button>
            </div>
            
        </div>
    )
}
