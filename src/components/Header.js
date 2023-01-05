import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header bg-rose-600 h-16 text-5xl text-yellow-400 font-semibold'>
            <Link className=' hover:text-white' to='/home'>Home</Link>
            <Link className=' hover:text-white' to='/classes'>Classes</Link>
            <Link className=' hover:text-white' to='/teachers'>Teachers</Link>
            <Link className=' hover:text-white' to='/success'>Success</Link>
        </div>
    );
};

export default Header;