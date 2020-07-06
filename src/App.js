import React, { useState } from 'react';
import './App.css';

import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";

import './styles/book.css';

import MenuComponent from "./components/header/MenuComponent.js"
import FooterComponent from "./components/footer/FooterComponent.js"
import BookListComponent from "./components/book/BookListComponent.js"
import BookAddComponent from "./components/book/BookAddComponent.js"
import BookEditComponent from "./components/book/BookEditComponent.js"

function App() {

	return (
		<Router>
			<MenuComponent />
			<Switch>
				<Route path="/" exact></Route>
				<Route path="/book/list" component={BookListComponent} />
				<Route path="/book/add" component={BookAddComponent} />
				<Route path="/book/edit/:id" component={BookEditComponent} /> 
			</Switch>
			<FooterComponent />
		</Router>
	);
}

export default App;
