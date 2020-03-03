import React from 'react';

class Product extends React.Component {
	handleClick = () => {
		this.props.addToCart(this.props.index);
	};
	render() {
		const { image, name, desc, price, status } = this.props.info;
		const isAvailable = status === 'available';
		return (
			<li className="menu-product">
				<img src={image} alt={name} />
				<h2>{name}</h2>
				<p>{desc}</p>
				<h3>{price}</h3>
				<button disabled={!isAvailable} onClick={this.handleClick}>
					{isAvailable ? 'Add to cart' : 'Unavailable'}
				</button>
			</li>
		);
	}
}

export default Product;
