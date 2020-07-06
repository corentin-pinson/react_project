import React from 'react';

import {
	Link,
	NavLink
} from 'react-router-dom';

import '../../styles/header.css';

class MenuComponent extends React.Component {

	render() {
		return (
			<header className='container'>
				<h1>Book Library Online Service</h1>
				<div className='nav'>
					<ul>
						<li><Link to='/'>Home</Link></li>
						<li><NavLink to='/book/list'>Library</NavLink></li>
						<li><NavLink to='/book/add'>Register book</NavLink></li>
					</ul>
					<button id='lightModeSwitcher' className='day'>Night</button>
				</div>
			</header>
		);
	}
}

export default MenuComponent