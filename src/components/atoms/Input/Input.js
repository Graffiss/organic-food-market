import styled, { css } from "styled-components";

export const Input = styled.input`
  width: 30rem;
  height: 4rem;
  border: 1px solid $main-yellow;
  border-radius: 0.2rem;
  background: transparent;
  background: rgba(255, 255, 255, 0.2);
  margin-bottom: 1rem;

  ::placeholder {
    color: white;
    padding-left: 1rem;
  }

  ${({ textarea }) =>
    textarea &&
    css`
      width: 30rem;
    `}
`;
