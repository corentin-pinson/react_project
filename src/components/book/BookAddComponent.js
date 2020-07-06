import React from 'react'
import { useHistory } from 'react-router-dom';

import '../../styles/book.css';

import BookService from '../../services/BookService'
import BookFormComponent from './BookFormComponent'

export default function BookAddComponent(props) {

	const history = useHistory();

	let book = { name: 'name', description: 'description', dueDate: new Date() };

	const onSubmitSuccess = (e) => {
		history.push('/book/list');
	}

	return (
		<>
			<h1>Book metadata registration</h1>
			<BookFormComponent defaultBook={book} submitAction={BookService.save} submitSuccess={onSubmitSuccess} buttonText='Register' />
		</>
	);
}