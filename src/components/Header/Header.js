import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return <div className='header'>
        <div className='nav_item'>
            <Link to='/' className='companyName nav_item_link'>MobilePhones</Link>
        </div>
        <div className='nav_item'>
            <Link to='/products' className='companyName nav_item_link'>Products</Link>
        </div>
        <div className='nav_item'>
            <Link to='/cart' className='companyName nav_item_link'>Cart</Link>
        </div>
    </div>
}