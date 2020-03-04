import React from 'react';

class Cart extends React.Component {
	render() {
		const orderID = Object.keys(this.props.order);
		return (
			<div>
				<h2>Order basket</h2>
				<ul>
					<li />
				</ul>
			</div>
		);
	}
}

export default Cart;
