import React from "react";
import styled from "styled-components";

const GridWrapper = styled.div`
  display: grid;
  max-height: 75vh;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(8, 1fr);
  overflow: hidden;
  margin: auto;
`;

const GridTemplate: React.FC = ({ children }) => {
  return <GridWrapper>{children}</GridWrapper>;
};

export default GridTemplate;
