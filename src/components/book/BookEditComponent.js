import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

import { useParams } from "react-router-dom";

import BookService from '../../services/BookService'
import BookFormComponent from './BookFormComponent'

import '../../styles/book.css';

export default function BookEditComponent(props) {

	let [book, setBook] = useState(undefined);
	const { id } = useParams();

	useEffect(() => {
		BookService.findById(id).then(
			data => {
				setBook(data);
			},
			error => console.error(error)
		);
	}, [id]);

	if (book) {
		return (
			<>
				<h1>BookEditComponent</h1>
				<BookFormComponent defaultBook={book} submitAction={BookService.update} buttonText='Update' />
			</>
		);
	} else {
		return (
			<>
				<h1>BookEditComponent</h1>
				<span>Waiting for data..</span>
			</>
		);
	}
}