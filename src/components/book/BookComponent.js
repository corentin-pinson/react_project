import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import BookService from '../../services/BookService'
 
import { UpdateTodoList } from '../../App';

export default function BookComponent(props) {

	const history = useHistory();
	const [showDetails, setShowDetails] = useState(false);

	const handleEditRequest = (e) => {
		history.push('/book/edit/' + props.book.id);
	}

	const handleDelete = (e) => {
		BookService.delete(props.book)
				.then(() => UpdateTodoList.setUpdate());
	}

	const header = () => {
		return (
			<>
				<h5><input type='checkbox' onClick={() => setShowDetails(!showDetails)} /> {props.book.name}</h5>
			</>
		);
	}

	const details = () => {
		return (
			<>
				<span>Description: </span>
				<span>{props.book.description}</span><br />
				<span>Date: </span>
				<span>{props.book.dueDate.getDate() + '-' + (props.book.dueDate.getMonth() + 1) + '-' + props.book.dueDate.getFullYear()}</span><br />
			</>
		);
	}

	const options = () => {
		return (
			<>
				<button onClick={handleEditRequest}>Edit</button>
				<button onClick={handleDelete}>Remove</button><br />
			</>
		);
	}

	return (
		<>
			{header()}
			{showDetails && details()}
			{options()}
			<div class='line'></div>
		</>
	);
}