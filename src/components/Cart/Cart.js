import React, { useState } from 'react'
import CartItem from '../CartItem/CartItem';
import './Cart.css';

export default function Cart(props) {
    const {cart} = props;
    
    return (
        <div>
            <div className='cart'>
                <div className='cart_heading'>
                    <h1>Cart iTems</h1>
                </div>
                <div className='cart_header'>
                    <div className='cart_wrapper'>
                        <p>Brand</p>
                    </div>
                    <div className='cart_wrapper'>
                        <p>Model</p>
                    </div>
                    <div className='cart_wrapper'>
                        <p>RAM</p>    
                    </div>
                    <div className='cart_wrapper'>
                        <p>Color</p>
                    </div>
                    <div className='cart_wrapper'>
                        <p>Amount</p> 
                    </div>
                    <div className='cart_wrapper'>
                        <p>Price</p>
                    </div>
                    <div className='cart_wrapper'>
                        <p>Total</p>
                    </div>
                  
                </div>
                <div className='cart_items'>
                    {cart.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem = {cartItem} ></CartItem>
                ))}
                </div>
            </div>
        </div>
    )
}
