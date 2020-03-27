import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
	<div className="not-found">
		<h2>404 - Not found</h2>
		<Link to="/store">
			<button>Store</button>
		</Link>
	</div>
);

export default NotFound;
