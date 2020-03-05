import React from 'react';

class AddProduct extends React.Component {
	nameRef = React.createRef();
	priceRef = React.createRef();
	statusRef = React.createRef();
	descRef = React.createRef();
	imageRef = React.createRef();

	createProduct = (e) => {
		e.preventDefault();
		const product = {
			name: this.nameRef.current.value,
			price: parseInt(this.priceRef.current.value),
			status: this.statusRef.current.value,
			desc: this.descRef.current.value,
			image: this.imageRef.current.value
		};
		this.props.addProductToList(product);
	};
	render() {
		return (
			<form className="edit-form" onSubmit={this.createProduct}>
				<input name="name" ref={this.nameRef} type="text" placeholder="Name" required />
				<input name="price" ref={this.priceRef} type="text" placeholder="Price" required />
				<select name="status" ref={this.statusRef} required>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out</option>
				</select>
				<textarea name="desc" ref={this.descRef} placeholder="Desc" required />
				<input name="image" ref={this.imageRef} type="text" placeholder="Paste URL to an image" />
				<button type="submit">+ Add New Product</button>
			</form>
		);
	}
}

export default AddProduct;
