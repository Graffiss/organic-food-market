import React from 'react';

class Product extends React.Component {
	render() {
		const { image, name, desc, price } = this.props.info;
		return (
			<li className="menu-product">
				<img src={image} alt={name} />
				<h2>{name}</h2>
				<p>{desc}</p>
				<h3>{price}</h3>
				<button>Add to cart</button>
			</li>
		);
	}
}

export default Product;
