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

const GridTemplate = () => {
  return <GridWrapper></GridWrapper>;
};

export default GridTemplate;
