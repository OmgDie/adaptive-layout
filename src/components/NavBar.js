import React from 'react';
import '../styles/NavBar.css';
import Logo from '../img/Logo.svg';

const NavBar = () => {
    return (
        <div>
            <nav>
                <div className='navName'>
                    <img src={Logo} alt="Product 24"/>
                </div>
                <button className='navItem'>
                    NavItem1
                </button>
                <button className='navItem'>
                    NavItem2
                </button>
                <button className='navItem'>
                    NavItem3
                </button>
                <button className='exit'>
                    Button
                </button>
            </nav>
        </div>
    );
};

export default NavBar;