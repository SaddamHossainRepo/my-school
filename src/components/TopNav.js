import React from 'react';
import banner from '../school/banner.jpg'
import logo from '../school/logo.webp'
import './TopNav.css'

const TopNav = () => {
    return (
        <div >
            <img className='banner' src={banner} alt="" />
            <img className='logo' src={logo} alt="" />
            <div className='email-phone'>
                <p >admin@kidslife.com</p>
                <p>+91 1234567890</p>
            </div>
        </div>
    );
};

export default TopNav;