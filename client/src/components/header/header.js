import React from 'react';
import './header.scss';
import Logo from '../logo/logo';
import { Link } from 'react-router-dom'


function Header() {
	return (
		<span className='header-container'>
            <span className='header'>
				<Link className='header-logo' to="/">
					<Logo />
				</Link>
            </span>
            <nav className='btn' >
            <input type='button' value='Inventory' className='btn-inventory btn-active' />
            <input type='button' value='Locations' className='btn-locations' />
            </nav>
		</span>
	);
}

export default Header;
