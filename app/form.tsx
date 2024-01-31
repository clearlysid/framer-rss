"use client";

import { useState } from 'react';

export default function Form() {

	const [inputValue, setInputValue] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Check if the input is a valid URL
		const isValidUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(inputValue);

		if (isValidUrl) {
			// Construct the URL with the input value and open in a new tab
			const feedUrl = `https://framer-rss.netlify.app/api?site=${encodeURIComponent(inputValue)}`;
			window.open(feedUrl, '_blank');
		} else {
			// Handle invalid URL
			alert('Please enter a valid URL');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="https://www.helmer.app/blog"
				required
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<input type="submit" value="Create Feed" />
		</form>
	)
}
