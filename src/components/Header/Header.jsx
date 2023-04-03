import React from 'react';
import './Header.css'
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <div className='header'>
            <h1>Knowledge Cafe</h1>
            <img src={logo} alt="" />
        </div>
    );
};

export default Header;