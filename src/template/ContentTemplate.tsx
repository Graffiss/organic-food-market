import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-height: 75vh;
  min-width: 60vw;
  background: #ffc547;
  overflow: auto;
  margin: auto;
`;

const ContentTemplate: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ContentTemplate;
