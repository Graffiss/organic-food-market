import React, { useContext } from "react";
import AppContext from "../../../context/AppContext";
import styled, { css } from "styled-components";

const CartVisible = styled.div`
  background: #ffc547;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 70%;
  transition: transform 1s ease;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2), 0px 20px 40px rgba(0, 0, 0, 0.2);
  z-index: 1;

  ${({ hidden }) =>
    hidden &&
    css`
      transform: translateX(-100%);
      display: none;
    `}
`;

const CartHidden = styled.div`
  transform: translateX(-100%);
  display: none;
`;

const Cart = () => {
  const context = useContext(AppContext);
  const { order, products, removeProductFromOrder, sumValues } = context;

  const cartRef = React.createRef();

  const summaryFunc = (key) => {
    const product = products[key];
    const count = order[key];
    const isAvaiable = product.status === "available";
    if (!isAvaiable) {
      return (
        <li key={key}>
          Sorry {product ? product.name : "product"} is no longer available
        </li>
      );
    }
    return (
      <li key={key}>
        {count} kg {product.name}
        {count * product.price}
        <button onClick={() => removeProductFromOrder(key)}>Remove</button>
      </li>
    );
  };
  const orderID = Object.keys(order);
  const summary = orderID.reduce((prevSummary, key) => {
    const product = products[key];
    const count = order[key];
    const isAvaiable = product && product.status === "available";
    if (isAvaiable) {
      return prevSummary + count * product.price;
    }
    return prevSummary;
  }, 0);

  return (
    <CartVisible ref={cartRef}>
      <h2>Shopping cart</h2>
      <ul>{orderID.map(summaryFunc)}</ul>
      <div>{summary}</div>
      <div>Number of items in the cart: {sumValues(order)}</div>
    </CartVisible>
  );
};

export default Cart;
