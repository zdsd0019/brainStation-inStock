import React from 'react';
import './header.scss';
import Logo from '../logo/logo';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<span className="header-container">
			<span className="header">
				<Link className="header-logo" to="/">
					<Logo />
				</Link>
			</span>
			<nav className="btn">
				<Link to="/inventory" className="btn-inventory">
					Inventory
				</Link>
				<Link to="/warehouses" className="btn-locations">
					Locations
				</Link>
			</nav>
		</span>
	);
}

export default Header;
