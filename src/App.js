import React from 'react';
import Product from './components/Product';
import productsDatabase from './products-database';
import Cart from './components/Cart';
import Inventory from './components/Inventory';
import Nav from './components/Nav';

class App extends React.Component {
	state = {
		products: {
			vegetable1: {
				index: 1,
				name: 'Carrot',
				image: '/images/carrots.jpg',
				desc: 'Everyone’s favorite white fish. We will cut it to the size you need and ship it.',
				price: 12,
				status: 'available'
			},

			vegetable2: {
				index: 2,
				name: 'Green apples',
				image: '/images/green-apples.jpg',
				desc: 'These tender, mouth-watering beauties are a fantastic hit at any dinner party.',
				price: 10,
				status: 'available'
			}
		},
		order: {},
		cartVisible: false
	};

	cartRef = React.createRef();

	componentDidMount() {
		const localStorageRef = localStorage.getItem('Order');
		if (localStorageRef) {
			this.setState({ order: JSON.parse(localStorageRef) });
		}
		console.log(this.cartRef.current);
	}

	componentDidUpdate() {
		localStorage.setItem('Order', JSON.stringify(this.state.order));
	}

	saveProductsList = () => {
		this.setState({ products: productsDatabase });
	};

	addToCart = (key) => {
		const order = { ...this.state.order };
		order[key] = order[key] + 1 || 1;
		this.setState({ order: order });
	};

	addProductToList = (product) => {
		const products = { ...this.state.products };
		products[`product${Date.now()}`] = product;
		this.setState({
			products: products
		});
	};

	updateProduct = (key, updateProduct) => {
		const products = { ...this.state.products };
		products[key] = updateProduct;
		this.setState({ products: products });
	};

	removeProductFromInventory = (key) => {
		const products = { ...this.state.products };
		delete products[key];
		this.setState({ products: products });
	};

	removeProductFromOrder = (key) => {
		const order = { ...this.state.order };
		delete order[key];
		this.setState({ order: order });
	};

	cartOpen = () => {
		this.setState({
			cartVisible: !this.state.cartVisible
		});
	};

	handleClickOutsideCart = () => {
		if (!this.state.cartVisible) {
			// attach/remove event handler
			document.addEventListener('click', this.handleOutsideClick, false);
		} else {
			document.removeEventListener('click', this.handleOutsideClick, false);
		}
		this.setState({
			cartVisible: !this.state.cartVisible
		});
	};

	handleOutsideClick = (e) => {
		// ignore clicks on the component itself
		if (this.node.contains(e.target)) {
			return;
		}

		this.handleClickOutsideCart();
	};

	sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);

	render() {
		return (
			<React.Fragment>
				<section className="main-background">
					<div id="background">
						<section className="main-site">
							<Nav
								cartOnClick={this.handleClickOutsideCart}
								itemsInCart={this.sumValues(this.state.order)}
							/>
							<div className="organic-food-market">
								<div className="menu">
									<ul className="products">
										{Object.keys(this.state.products).map((key) => (
											<Product
												key={key}
												index={key}
												info={this.state.products[key]}
												addToCart={this.addToCart}
											/>
										))}
									</ul>
								</div>
								<div ref={(node) => (this.node = node)}>
									<Cart
										products={this.state.products}
										order={this.state.order}
										cartVisible={this.state.cartVisible}
										removeProductFromOrder={this.removeProductFromOrder}
									/>
								</div>
								<Inventory
									addProductToList={this.addProductToList}
									products={this.state.products}
									updateProduct={this.updateProduct}
									removeProductFromInventory={this.removeProductFromInventory}
								/>
							</div>
						</section>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default App;
