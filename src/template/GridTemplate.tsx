import React, { ReactNode } from "react";
import styled from "styled-components";

const GridWrapper = styled.div`
  display: grid;
  max-height: 75vh;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(8, 1fr);
  overflow: hidden;
  margin: auto;
`;

interface Props {
  children: ReactNode;
}

const GridTemplate = ({ children }: Props) => {
  return <GridWrapper>{children}</GridWrapper>;
};

export default GridTemplate;
