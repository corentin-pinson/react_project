import React, { useState } from 'react';
import './App.css';

import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import './styles/book.css';

import MenuComponent from './components/header/MenuComponent.js'
import FooterComponent from './components/footer/FooterComponent.js'
import BookListComponent from './components/book/BookListComponent.js'
import BookAddComponent from './components/book/BookAddComponent.js'
import BookEditComponent from './components/book/BookEditComponent.js'
 
// Context state of todo list
export var Theme = React.createContext();
export var UpdateTodoList = React.createContext();

function App() {

	const [theme, setTheme] = useState('day');
	const [updateValue, setUpdateValue] = useState(false);

	const switchTheme = () => {
		if (theme === 'day') {
			setTheme('night');
		} else {
			setTheme('day');
		}
	}

	return (
		<Router>
			<Theme.Provider value={{theme: theme, switchTheme: switchTheme}}>
				<div id='container' className={theme}>
					<MenuComponent />
					<Switch>
						<UpdateTodoList.Provider value={{update: updateValue, setUpdate: () => setUpdateValue(!updateValue)}}>
							<Route path='/' exact></Route>
							<Route path='/book/list' component={BookListComponent} />
							<Route path='/book/add' component={BookAddComponent} />
							<Route path='/book/edit/:id' component={BookEditComponent} />
						</UpdateTodoList.Provider>
					</Switch>
					<FooterComponent />
				</div>
			</Theme.Provider>
		</Router>
	);
}

export default App;
