import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Header({ type }) {
	const active = { color: 'beige' };
	return (
		<header className={type}>
			<div className='inner'>
				<h1>
					<NavLink exact to='/' activeStyle={active}>
						LOGO
					</NavLink>
				</h1>
				<ul id='gnb'>
					<li>
						<NavLink to='/brand' activeStyle={active}>
							BRAND
						</NavLink>
					</li>
					<li>
						<NavLink to='/product' activeStyle={active}>
							PRODUCT
						</NavLink>
					</li>
					<li>
						<NavLink to='/store' activeStyle={active}>
							STORE
						</NavLink>
					</li>
					<li>
						<NavLink to='/gallery' activeStyle={active}>
							GALLERY
						</NavLink>
					</li>
					<li>
						<NavLink to='/youtube' activeStyle={active}>
							YOUTUBE
						</NavLink>
					</li>
				</ul>
				<FontAwesomeIcon icon={faBars} className='icon' />
			</div>
		</header>
	);
}

export default Header;
