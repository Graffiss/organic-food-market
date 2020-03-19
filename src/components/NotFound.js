import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
	<div>
		<h2>404 - Not found</h2>
		<button>
			<Link to="/store">Store</Link>
		</button>
	</div>
);

export default NotFound;
