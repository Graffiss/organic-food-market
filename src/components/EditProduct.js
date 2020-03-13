import React from 'react';

class EditProduct extends React.Component {
	handleChange = (e) => {
		const updateProduct = {
			...this.props.products,
			[e.currentTarget.name]: e.currentTarget.value
		};
		this.props.updateProduct(this.props.index, updateProduct);
	};
	render() {
		return (
			<div className="edit-form">
				<input name="name" type="text" value={this.props.products.name} onChange={this.handleChange} />
				<input name="price" type="text" value={this.props.products.price} onChange={this.handleChange} />
				<select name="status" value={this.props.products.status} onChange={this.handleChange}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out</option>
				</select>
				<textarea name="desc" value={this.props.products.desc} onChange={this.handleChange} />
				<input name="image" type="text" value={this.props.products.image} onChange={this.handleChange} />
				<button onClick={() => this.props.removeProductFromInventory(this.props.index)}>Delete product</button>
			</div>
		);
	}
}

export default EditProduct;
