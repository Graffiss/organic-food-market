import React from 'react';

class Cart extends React.Component {
	sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);
	summaryFunc = (key) => {
		const product = this.props.products[key];
		const count = this.props.order[key];
		const isAvaiable = product.status === 'available';
		if (!isAvaiable) {
			return <li key={key}>Sorry {product ? product.name : 'product'} is no longer available</li>;
		}
		return (
			<li key={key}>
				{count} kg {product.name}
				{count * product.price}
			</li>
		);
	};

	render() {
		const orderID = Object.keys(this.props.order);
		const summary = orderID.reduce((prevSummary, key) => {
			const product = this.props.products[key];
			const count = this.props.order[key];
			const isAvaiable = product && product.status === 'available';
			if (isAvaiable) {
				return prevSummary + count * product.price;
			}
			return prevSummary;
		}, 0);
		return (
			<div>
				<h2>Shopping cart</h2>
				<ul>{orderID.map(this.summaryFunc)}</ul>
				<div className="summary">{summary}</div>
				<div>Number of items in the cart: {this.sumValues(this.props.order)}</div>
			</div>
		);
	}
}

export default Cart;
