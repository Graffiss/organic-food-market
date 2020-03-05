import React from 'react';
import AddProduct from './AddProduct';

class Inventory extends React.Component {
	render() {
		return (
			<div>
				<h1>INVENTORY</h1>
				<AddProduct addProductToList={this.props.addProductToList} />
			</div>
		);
	}
}

export default Inventory;
