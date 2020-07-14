import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../../../context/AppContext";

const Nav = () => {
  const context = useContext(AppContext);
  const { sumValues, order, handleClickOutsideCart } = context;

  const itemsInCart = sumValues(order);

  const checkIfZero = () => {
    if (itemsInCart === 0) {
      return <li onClick={() => handleClickOutsideCart()}>Cart</li>;
    } else {
      return (
        <li onClick={() => handleClickOutsideCart()}>
          Cart<span className="total-in-cart">{itemsInCart}</span>
        </li>
      );
    }
  };

  return (
    <header className="main-head">
      <nav>
        <li>
          <img src="" alt="" />
        </li>

        <h1 id="logo">
          <NavLink to="/" id="logo">
            Organic Food
          </NavLink>
        </h1>
        <ul className="nav-links">
          <li>
            <NavLink exact to="/" activeClassName="current">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="current">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName="current">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/store" activeClassName="current">
              Store
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="current">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="current">
              Contact
            </NavLink>
          </li>
          {checkIfZero()}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
