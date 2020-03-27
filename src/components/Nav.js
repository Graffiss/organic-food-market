import React from 'react';
import { NavLink } from 'react-router-dom';

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
						<NavLink to="/" id="logo">
							Organic Food
						</NavLink>
					</h1>
					<ul className="nav-links">
						<li>
							<NavLink exact to="/" activeClassName="current">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/about" activeClassName="current">
								About
							</NavLink>
						</li>
						<li>
							<NavLink to="/store" activeClassName="current">
								Store
							</NavLink>
						</li>
						<li>
							<NavLink to="/admin" activeClassName="current">
								Login
							</NavLink>
						</li>
						<li>
							<NavLink to="/contact" activeClassName="current">
								Contact
							</NavLink>
						</li>
						{this.checkIfZero()}
					</ul>
				</nav>
			</header>
		);
	}
}

export default Nav;
