import React, { useState } from 'react'

import '../../styles/book.css';

import BookService from '../../services/BookService'
import BookFormComponent from './BookFormComponent'

export default function BookAddComponent(props) {

	let book = { name: 'name', description: 'description', dueDate: new Date() };

	return (
		<>
			<h1>BookAddComponent</h1>
			<BookFormComponent defaultBook={book} submitAction={BookService.save} buttonText='Register' />
		</>
	);
}