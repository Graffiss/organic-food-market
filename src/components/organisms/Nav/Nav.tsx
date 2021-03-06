import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../../../store/AppContext";
import styled from "styled-components";
import Cart from "../Cart/Cart";

const Header = styled.header`
  max-height: 10vh;
`;

const NavWrapper = styled.nav`
  background: white;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 2rem 0rem;
  color: black;
  font-size: 1.6rem;
`;

const Logo = styled.h1`
  display: flex;
  flex: 1 1 20rem;
  font-size: 2rem;
  justify-content: flex-end;
  padding-right: 2%;
  a {
    color: #cdd661;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  flex: 1 1 20rem;
  color: black;
  font-size: 1.6rem;
  text-decoration: none;
  cursor: pointer;

  .active {
    border-bottom: 0.5rem solid #ffc547;
  }
`;

const CartSummary = styled.span`
  background: #01abce;
  border-radius: 0.8em;
  -moz-border-radius: 0.8em;
  -webkit-border-radius: 0.8em;
  color: #ffffff;
  display: inline-block;
  line-height: 1.2em;
  margin-right: 5px;
  text-align: center;
  width: 1.2em;
`;

const Nav = () => {
  const context = useContext(AppContext);
  const { sumValues, order, cartOpen, cartVisible } = context;

  const itemsInCart = sumValues(order);

  const checkIfZero = () => {
    if (itemsInCart === 0) {
      return <li onClick={cartOpen}>Cart</li>;
    } else {
      return (
        <li onClick={cartOpen}>
          Cart<CartSummary>{itemsInCart}</CartSummary>
        </li>
      );
    }
  };

  return (
    <Header>
      <NavWrapper>
        <li>
          <img src="" alt="" />
        </li>

        <Logo>
          <NavLink to="/">Organic Food</NavLink>
        </Logo>
        <NavLinks>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName="active">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/store" activeClassName="active">
              Store
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
          {checkIfZero()}

          {cartVisible && <Cart />}
        </NavLinks>
      </NavWrapper>
    </Header>
  );
};

export default Nav;
