import React from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";

const Background = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #cdd661;
`;

const Wrapper = styled.div`
  min-width: 80vw;
  max-width: 80vw;
  min-height: 80vh;
  max-height: 80vh;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2), 0px 20px 40px rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  overflow: hidden;
  background-color: #ffc547;
`;

const MainTemplate = ({ children }) => {
  return (
    <Background>
      <Wrapper>
        <GlobalStyle />
        {children}
      </Wrapper>
    </Background>
  );
};

export default MainTemplate;
