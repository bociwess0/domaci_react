import React from 'react';
import './Header.css';

export default function Header(props) {
    return <div className='header'>
        <div className='nav_item'>
            <p className='companyName nav_item'>MobilePhones</p>
        </div>
        <div className='nav_item'>
            <p className='companyName nav_item'>Products</p>
        </div>
        <div className='nav_item'>
            <p className='companyName nav_item'>Cart</p>
        </div>
    </div>
}