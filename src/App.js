import React, { useState } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import './App.css';

function App() {
  const [sheetConnect, setSheetConnect] = useState('');
	const [name, setName] = useState('');
	const [genre, setGenre] = useState('');
	const [rating, setRating] = useState('');
	const [synopsis, setSynopsis] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

    const objt = { sheetConnect, name, genre, rating, synopsis };

		axios
			.post(
				sheetConnect,
				objt
			)
			.then((response) => {
				console.log(response);
			});
	};

	return (
		<Container fluid className="container">
			<Header as="h2">Post to Movie API Database</Header>
			<Form className="form">
        <Form.Field>
					<label>Sheet.best URL</label>
					<input
						placeholder="Enter The Link from Sheet.best"
						onChange={(e) => setSheetConnect(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Name</label>
					<input
						placeholder="Enter Movie Name"
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Genre</label>
					<input
						placeholder="Enter Movie Genre"
						onChange={(e) => setGenre(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>IMDB Rating</label>
					<input
						placeholder="Enter IMDB Rating"
						onChange={(e) => setRating(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Synopsis</label>
					<input
						placeholder="Enter BaNyar TharaKar"
						onChange={(e) => setSynopsis(e.target.value)}
					/>
				</Form.Field>

				<Button color="blue" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</Form>
			<p>&copy;2021 StaffCondor | Hosted on Git and Deploy with Pages.Dev</p>
		</Container>
	);
}

export default App;