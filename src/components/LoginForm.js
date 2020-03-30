import React, { useReducer } from 'react';
import { auth } from '../firebase';

const LoginForm = () => {
	const [ inputsContent, setInputsContent ] = useReducer((state, newState) => ({ ...state, ...newState }), {
		email: '',
		password: ''
	});

	const { email, password } = inputsContent;

	const handleInputChange = (e) => {
		setInputsContent({
			[e.target.name]: e.target.value
		});
	};

	const handleSignIn = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.catch((error) => alert(`Your email or password is incorrect, please check your data, ${error}`));
	};

	const handleSignUp = (e) => {
		e.preventDefault();
		auth
			.createUserWithEmailAndPassword(email, password)
			.catch((error) => alert(`Email is already in use, sign in or use other email, ${error}`));
	};
	return (
		<div className="login contact">
			<h2>Login or register in our store</h2>
			<input
				onChange={handleInputChange}
				placeholder="client@email.com"
				id="email-input"
				type="email"
				name="email"
				required
			/>
			<input
				onChange={handleInputChange}
				placeholder="********"
				id="password-input"
				type="password"
				name="password"
				required
			/>
			<div className="login-buttons">
				<button type="submit" name="login" onClick={handleSignIn}>
					Login
				</button>
				<button type="submit" name="register" className="button-register" onClick={handleSignUp}>
					Register
				</button>
			</div>
		</div>
	);
};

export default LoginForm;
