"use client";

import { useState } from 'react';

export default function Form() {

	const [inputValue, setInputValue] = useState('');
	const [feedUrl, setFeedUrl] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Check if the input is a valid URL
		const isValidUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(inputValue);

		if (isValidUrl) {
			// Construct the URL with the input value
			const baseUrl = window.location.href
			const feedUrl = baseUrl + "/api?site=" + encodeURIComponent(inputValue)
			setFeedUrl(feedUrl);
		} else {
			// Handle invalid URL
			alert('Please enter a valid URL');
		}

	};

	return (
		<>
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
			{feedUrl && (
				<div>
					<p>Copy this URL to your RSS reader or <a href={feedUrl} target='_blank'>open in new tab</a>:</p>
					<p>{feedUrl}</p>
				</div>
			)}
		</>
	)
}
