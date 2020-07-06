import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function BookFormComponent({defaultBook, submitAction, submitSuccess, buttonText}) {

	const [name, setName] = useState(defaultBook.name);
	const [description, setDescription] = useState(defaultBook.description);
	const [dueDate, setDueDate] = useState(defaultBook.dueDate);
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		defaultBook.name = name;
		defaultBook.description = description;
		defaultBook.dueDate = dueDate;

		submitAction(defaultBook).then(
			(data) => {
				setSuccessMessage('Success!');
				setErrorMessage('');

				if (submitSuccess) {
					submitSuccess();
				}
			},
			(error) => {
				setSuccessMessage('');
				setErrorMessage('Fail!');
			}
		);
	}

	const handleNameChange = (e) => {
		setName(e.target.value);
	}

	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);
	}

	const handleDueDateChange = (e) => {
		setDueDate(new Date(e.target.value));
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type='text' name='name' value={name} onChange={handleNameChange} />
				<br/>
				<input type='text' name='description' value={description} onChange={handleDescriptionChange} />
				<br/>
				<input type='date' name='dueDate' value={dueDate.toISOString().substr(0, 10)} onChange={handleDueDateChange} />
				<br/>
				<button type='submit'>{buttonText}</button><br />
				<span className='success'>{successMessage}</span>
				<span className='error'>{errorMessage}</span>
			</form>
		</>
	);
}

BookFormComponent.propTypes = {
	defaultBook: PropTypes.object,
	submitAction: PropTypes.func.isRequired,
	buttonText: PropTypes.string.isRequired
}