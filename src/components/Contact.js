import React from 'react';

class Contact extends React.Component {
	render() {
		return (
			<div className="contact">
				<h2>Contact form</h2>
				<input placeholder="name" />
				<input placeholder="email" />
				<textarea placeholder="Your question..." />
				<button type="submit">Send</button>
			</div>
		);
	}
}

export default Contact;
