import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../../../context/AppContext";
import styled from "styled-components";

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

  .active {
    border-bottom: 0.5rem solid #ffc547;
  }
`;

const Logo = styled.h1`
  display: flex;
  flex: 1 1 20rem;
  font-size: 2rem;
  color: #cdd661;
  justify-content: flex-end;
  padding-right: 2%;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  flex: 1 1 20rem;
  color: black;
  font-size: 1.6rem;
  text-decoration: none;
  cursor: pointer;
`;

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
    <Header>
      <NavWrapper>
        <li>
          <img src="" alt="" />
        </li>

        <Logo id="logo">
          <NavLink to="/" id="logo">
            Organic Food
          </NavLink>
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
        </NavLinks>
      </NavWrapper>
    </Header>
  );
};

export default Nav;
