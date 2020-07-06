import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import BookComponent from '../book/BookComponent'
import BookService from '../../services/BookService'

export default function BookListComponent(props) {

	const [bookList, setBookList] = useState(undefined);
	const [error, setError] = useState(undefined);

	useEffect(() => console.log("BookListComponent rendered (mount)"), []);
	useEffect(() => console.log("BookListComponent rendered (mount & update)"));
	useEffect(() => {
		BookService.findAll().then(
			data => {
				setError('');
				setBookList(data);
			},
			error => {
				setError(error);
				setBookList(undefined);
			}
		);
	}, [props.update]);

	if (bookList) {
		return (
			<>
				<h1>BookListComponent</h1>
				{bookList.map(book => <BookComponent key={book.id} book={book} />)}
			</>

		);
	} else {
		return (
			<>
				<h1>BookListComponent</h1>
				<span>{error ? error : ''}</span>
			</>

		);
	}
}

BookListComponent.propTypes = {
	id: PropTypes.number
}