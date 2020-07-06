import React from 'react';
import { useHistory } from 'react-router-dom';

import BookService from '../../services/BookService'

export default function BookComponent(props) {

	const history = useHistory();

	const handleEditRequest = (e) => {
		history.push("/book/edit/" + props.book.id);
	}

	const handleDelete = (e) => {
		BookService.delete(props.book);
	}

	return (
		<>
			<span>{props.book.name} | </span>
			<span>{props.book.description} | </span>
			<span>{props.book.dueDate.toString()} | </span>
			<button onClick={handleEditRequest}>Edit</button>
			<button onClick={handleDelete}>Remove</button><br />
		</>
	);
}