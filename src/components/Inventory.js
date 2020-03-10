import React from 'react';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

class Inventory extends React.Component {
	render() {
		return (
			<div>
				<h1>INVENTORY</h1>
				{Object.keys(this.props.products).map((key) => (
					<EditProduct
						key={key}
						index={key}
						products={this.props.products[key]}
						updateProduct={this.props.updateProduct}
					/>
				))}
				<AddProduct addProductToList={this.props.addProductToList} />
			</div>
		);
	}
}

export default Inventory;
