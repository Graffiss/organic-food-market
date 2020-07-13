import React from "react";

const Cart = ({ order, cartVisible }) => {
  const cartRef = React.createRef();

  const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);
  const summaryFunc = (key) => {
    const product = this.props.products[key];
    const count = this.props.order[key];
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
        <button onClick={() => this.props.removeProductFromOrder(key)}>
          Remove
        </button>
      </li>
    );
  };
  const orderID = Object.keys(order);
  const summary = orderID.reduce((prevSummary, key) => {
    const product = this.props.products[key];
    const count = this.props.order[key];
    const isAvaiable = product && product.status === "available";
    if (isAvaiable) {
      return prevSummary + count * product.price;
    }
    return prevSummary;
  }, 0);

  return (
    <div className={cartVisible ? "cart-visible" : "cart-hidden"} ref={cartRef}>
      <h2>Shopping cart</h2>
      <ul>{orderID.map(summaryFunc)}</ul>
      <div className="summary">{summary}</div>
      <div>Number of items in the cart: {sumValues(order)}</div>
    </div>
  );
};

export default Cart;
