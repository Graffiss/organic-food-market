import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
	checkIfZero = () => {
		if (this.props.itemsInCart === 0) {
			return <li onClick={this.props.cartOnClick}>Cart</li>;
		} else {
			return (
				<li onClick={this.props.cartOnClick}>
					Cart<span className="total-in-cart"> {this.props.itemsInCart}</span>
				</li>
			);
		}
	};

	render() {
		return (
			<header className="main-head">
				<nav>
					<li>
						<img src="" alt="" />
					</li>

					<h1 id="logo">
						<Link to="/" id="logo">
							Organic Food
						</Link>
					</h1>
					<ul className="nav-links">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/store">Store</Link>
						</li>
						<li>
							<Link to="/admin">Login</Link>
						</li>
						<li>
							<Link to="/about">Contact</Link>
						</li>
						{this.checkIfZero()}
					</ul>
				</nav>
			</header>
		);
	}
}

export default Nav;
