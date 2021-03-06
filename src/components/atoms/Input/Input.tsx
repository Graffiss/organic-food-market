import styled, { css } from "styled-components";

export const Input = styled.input<{ textarea: boolean }>`
  width: 30rem;
  height: 4rem;
  border: 1px solid #ffc547;
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
