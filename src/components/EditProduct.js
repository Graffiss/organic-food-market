import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const EditProduct = ({ index }) => {
  const context = useContext(AppContext);
  const { products, removeProductFromInventory } = context;

  const handleChange = (e) => {
    const updateProduct = {
      ...products,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    updateProduct(index, updateProduct);
  };

  return (
    <FormWrapper>
      <input
        name="name"
        type="text"
        value={products.name}
        onChange={handleChange}
      />
      <input
        name="price"
        type="text"
        value={products.price}
        onChange={handleChange}
      />
      <select name="status" value={products.status} onChange={handleChange}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out</option>
      </select>
      <textarea name="desc" value={products.desc} onChange={handleChange} />
      <input
        name="image"
        type="text"
        value={products.image}
        onChange={handleChange}
      />
      <button onClick={() => removeProductFromInventory(index)}>
        Delete product
      </button>
    </FormWrapper>
  );
};

export default EditProduct;
