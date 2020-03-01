import React from 'react';
import Product from './components/Product';
import productsDatabase from './products-database';

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
		order: {}
	};

	saveProductsList = () => {
		this.setState({ products: productsDatabase });
	};

	render() {
		return (
			<div className="organic-food-market">
				<div className="menu">
					<ul className="products">
						{Object.keys(this.state.products).map((key) => (
							<Product key={key} info={this.state.products[key]} />
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
