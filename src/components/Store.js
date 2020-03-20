import React from 'react';
import Product from './Product';
import Cart from './Cart';

class Store extends React.Component {
	render() {
		return (
			<React.Fragment>
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
				{/* <div ref={(node) => (this.node = node)}>
					<Cart
						products={this.state.products}
						order={this.state.order}
						cartVisible={this.state.cartVisible}
						removeProductFromOrder={this.removeProductFromOrder}
					/>
						</div> */}
			</React.Fragment>
		);
	}
}

export default Store;
