import React from "react";
import styled from "styled-components";
import { HeaderTwo } from "../components/atoms/HeaderTwo/HeaderTwo";
import { Input } from "../components/atoms/Input/Input";
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

const ContactView = () => {
  return (
    <Wrapper>
      <HeaderTwo>Contact form</HeaderTwo>
      <Input placeholder="name" />
      <Input placeholder="email" />
      <Input textarea placeholder="Your question..." />
      <Button type="submit">Send</Button>
    </Wrapper>
  );
};

export default ContactView;
