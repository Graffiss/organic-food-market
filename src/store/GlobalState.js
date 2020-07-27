import React, { useState, useEffect } from "react";
import AppContext from "./AppContext";
import productsDatabase from "../products-database";

const GlobalState = ({ children }) => {
  const [products, setProducts] = useState(productsDatabase);
  const [order, setOrder] = useState({});
  const [cartVisible, setCartVisible] = useState(false);

  const cartRef = React.createRef();

  useEffect(() => {
    const localStorageRef = localStorage.getItem("Order");
    if (localStorageRef) {
      setOrder(JSON.parse(localStorageRef));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Order", JSON.stringify(order));
  }, [order]);

  const saveProductsList = () => {
    setProducts(productsDatabase);
  };

  const addToCart = (key) => {
    const order = { ...order };
    order[key] = order[key] + 1 || 1;
    setOrder(order);
  };

  const addProductToList = (product) => {
    const products = { ...products };
    products[`product${Date.now()}`] = product;
    setProducts(products);
  };

  const updateProduct = (key, updateProduct) => {
    const products = { ...products };
    products[key] = updateProduct;
    setProducts(products);
  };

  const removeProductFromInventory = (key) => {
    const products = { ...products };
    delete products[key];
    setProducts(products);
  };

  const removeProductFromOrder = (key) => {
    const order = { ...order };
    delete order[key];
    setOrder(order);
  };

  const cartOpen = () => {
    setCartVisible(!cartVisible);
  };

  /*  const handleOutsideClick = (e) => {
    // ignore clicks on the component itself
    if (window.node.contains(e.target)) {
      return;
    }

    handleClickOutsideCart();
  };

  const handleClickOutsideCart = () => {
    if (!cartVisible) {
      // attach/remove event handler
      document.addEventListener("click", handleOutsideClick(), false);
    } else {
      document.removeEventListener("click", handleOutsideClick(), false);
    }
    setCartVisible(!cartVisible);
  }; */

  const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);

  const context = {
    products,
    sumValues,
    /* handleOutsideClick,
    handleClickOutsideCart, */
    cartOpen,
    saveProductsList,
    addToCart,
    addProductToList,
    updateProduct,
    removeProductFromInventory,
    removeProductFromOrder,
    cartRef,
    order,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default GlobalState;
