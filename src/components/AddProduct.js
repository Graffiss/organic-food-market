import React from 'react';

class AddProduct extends React.Component {
	nameRef = React.createRef();

	createProduct = (e) => {
		e.preventDefault();
		console.log(this.nameRef.current.value);
	};
	render() {
		return (
			<form className="edit-form" onSubmit={this.createProduct}>
				<input name="name" ref={this.nameRef} type="text" placeholder="Name" />
				<input name="price" type="text" placeholder="Price" />
				<select name="status">
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out</option>
				</select>
				<textarea name="desc" placeholder="Desc" />
				<input name="image" type="text" placeholder="Image" />
				<button type="submit">+ Add New Product</button>
			</form>
		);
	}
}

export default AddProduct;
