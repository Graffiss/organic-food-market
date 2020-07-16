import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Button } from "./atoms/Button/Button";
import styled from "styled-components";
import { HeaderTwo } from "./atoms/HeaderTwo/HeaderTwo";
import { HeaderThree } from "./atoms/HeaderThree/HeaderThree";
import { Paragraph } from "./atoms/Paragraph/Paragraph";

const ListWrapper = styled.li`
  border-bottom: 2px solid black;
  margin: 2rem;
  font-size: 1.7rem;
`;

const Image = styled.img`
  width: 200px;
`;

const Product = ({ index }) => {
  const context = useContext(AppContext);
  const { products, addToCart } = context;

  const info = products[index];
  const { image, name, desc, price, status } = info;
  const handleClick = () => {
    addToCart(index);
  };

  const isAvailable = status === "available";
  return (
    <ListWrapper>
      <Image src={image} alt={name} />
      <HeaderTwo>{name}</HeaderTwo>
      <Paragraph>{desc}</Paragraph>
      <HeaderThree>{price}</HeaderThree>
      <Button disabled={!isAvailable} onClick={handleClick}>
        {isAvailable ? "Add to cart" : "Unavailable"}
      </Button>
    </ListWrapper>
  );
};

export default Product;
