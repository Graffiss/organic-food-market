import React from 'react';
import Store from './Store';
import productsDatabase from '../products-database';
import Inventory from './Inventory';
import Nav from './Nav';
import Home from './Home';
import Cart from './Cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Contact from './Contact';

class FakeApp extends React.Component {
	state = {
		products: productsDatabase,
		order: {},
		cartVisible: false
	};

	cartRef = React.createRef();

	componentDidMount() {
		const localStorageRef = localStorage.getItem('Order');
		if (localStorageRef) {
			this.setState({ order: JSON.parse(localStorageRef) });
		}
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
							<Router>
								<Nav
									cartOnClick={this.handleClickOutsideCart}
									itemsInCart={this.sumValues(this.state.order)}
								/>
								<div ref={(node) => (this.node = node)}>
									<Cart
										products={this.state.products}
										order={this.state.order}
										cartVisible={this.state.cartVisible}
										removeProductFromOrder={this.removeProductFromOrder}
									/>
								</div>
								<div className="organic-food-market">
									<Switch>
										<Route exact path="/" component={Home} />
										<Route
											path="/store"
											render={(props) => (
												<Store
													{...props}
													products={this.state.products}
													addToCart={this.addToCart}
												/>
											)}
										/>
										<Route
											path="/admin"
											render={(props) => (
												<Inventory
													{...props}
													addProductToList={this.addProductToList}
													products={this.state.products}
													updateProduct={this.updateProduct}
													removeProductFromInventory={this.removeProductFromInventory}
												/>
											)}
										/>
										<Route path="/contact" render={(props) => <Contact {...props} />} />
										<Route component={NotFound} />
									</Switch>
								</div>
							</Router>
						</section>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default FakeApp;
