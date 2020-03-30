import React from 'react';

const Login = () => {
	return (
		<div className="login contact">
			<h2>Login or register in our store</h2>
			<input placeholder="client@email.com" id="email-input" type="email" name="email" required />
			<input placeholder="********" id="password-input" type="password" name="password" required />
			<div className="login-buttons">
				<button type="submit" name="login">
					Login
				</button>
				<button type="submit" name="register" className="button-register">
					Register
				</button>
			</div>
		</div>
	);
};

export default Login;
