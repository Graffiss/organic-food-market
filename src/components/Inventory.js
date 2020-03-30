import React from 'react';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import Login from './Login';

class Inventory extends React.Component {
	render() {
		return <Login />;
		return (
			<div>
				<h1>INVENTORY</h1>
				{Object.keys(this.props.products).map((key) => (
					<EditProduct
						key={key}
						index={key}
						products={this.props.products[key]}
						updateProduct={this.props.updateProduct}
						removeProductFromInventory={this.props.removeProductFromInventory}
					/>
				))}
				<AddProduct addProductToList={this.props.addProductToList} />
			</div>
		);
	}
}

export default Inventory;
