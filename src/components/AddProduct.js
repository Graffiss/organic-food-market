import React, { useContext } from "react";
import AppContext from "../store/AppContext";
import styled from "styled-components";

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
`;

const AddProduct = () => {
  const context = useContext(AppContext);
  const { addProductToList } = context;

  const nameRef = React.createRef();
  const priceRef = React.createRef();
  const statusRef = React.createRef();
  const descRef = React.createRef();
  const imageRef = React.createRef();

  const createProduct = (e) => {
    e.preventDefault();
    const product = {
      name: nameRef.current.value,
      price: parseInt(priceRef.current.value),
      status: statusRef.current.value,
      desc: descRef.current.value,
      image: imageRef.current.value,
    };
    addProductToList(product);
    e.currentTarget.reset();
  };
  return (
    <FormWrapper onSubmit={createProduct}>
      <input
        name="name"
        ref={nameRef}
        type="text"
        placeholder="Name"
        required
      />
      <input
        name="price"
        ref={priceRef}
        type="text"
        placeholder="Price"
        required
      />
      <select name="status" ref={statusRef} required>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out</option>
      </select>
      <textarea name="desc" ref={descRef} placeholder="Desc" required />
      <input
        name="image"
        ref={imageRef}
        type="text"
        placeholder="Paste URL to an image"
      />
      <button type="submit">+ Add New Product</button>
    </FormWrapper>
  );
};

export default AddProduct;
