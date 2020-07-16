import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeaderTwo } from "../components/atoms/HeaderTwo/HeaderTwo";
import { Button } from "../components/atoms/Button/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  max-height: 70vh;
  overflow: auto;
`;

const NotFoundView = () => (
  <Wrapper>
    <HeaderTwo>404 - Not found</HeaderTwo>
    <Link to="/store">
      <Button>Store</Button>
    </Link>
  </Wrapper>
);

export default NotFoundView;
