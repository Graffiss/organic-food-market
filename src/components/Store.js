import React from 'react';
import Product from './Product';

class Store extends React.Component {
	render() {
		return (
			<div className="menu">
				<ul className="products">
					{Object.keys(this.props.products).map((key) => (
						<Product
							key={key}
							index={key}
							info={this.props.products[key]}
							addToCart={this.props.addToCart}
						/>
					))}
				</ul>
			</div>
		);
	}
}

export default Store;
