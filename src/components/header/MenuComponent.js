import React, { useContext } from 'react';

import {
	Link,
	NavLink
} from 'react-router-dom';

import { Theme } from '../../App';

import '../../styles/header.css';

export default function MenuComponent(props) {

	const { theme, switchTheme } = useContext(Theme);

	return (
		<header>
			<h1>Book Library Online Service</h1>
			<div className='nav'>
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><NavLink to='/book/list'>Library</NavLink></li>
					<li><NavLink to='/book/add'>Register book</NavLink></li>
				</ul>
				<button id='themeSwitcher' className={theme} onClick={switchTheme}>{theme.charAt(0).toUpperCase() + theme.slice(1)}</button>
			</div>
		</header>
	);
}