import React, { useContext, useReducer } from "react";
import AppContext from "../store/AppContext";
import styled from "styled-components";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createProduct } from "../store/actions/productActions";

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
`;

const AddProduct = (props) => {
  const [product, setProduct] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      desc: "",
      price: 0,
      status: "",
      image: "",
    }
  );

  const handleInputChange = (e) => {
    setProduct({
      [e.target.name]: e.target.value,
    });
  };

  // const context = useContext(AppContext);
  // const { addProductToList } = context;

  const createProduct = (e) => {
    e.preventDefault();
    props.createProduct(product);
    e.currentTarget.reset();
  };

  const { auth } = props;
  if (!auth.uid) return <Redirect exact to="/" />;

  return (
    <FormWrapper onSubmit={createProduct}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        onChange={handleInputChange}
        required
      />
      <input
        name="price"
        type="text"
        placeholder="Price"
        onChange={handleInputChange}
        required
      />
      <select name="status" onChange={handleInputChange} required>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out</option>
      </select>
      <textarea
        name="desc"
        placeholder="Desc"
        onChange={handleInputChange}
        required
      />
      <input
        name="image"
        type="text"
        placeholder="Paste URL to an image"
        onChange={handleInputChange}
      />
      <button type="submit">+ Add New Product</button>
    </FormWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProduct: (product) => dispatch(createProduct(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
