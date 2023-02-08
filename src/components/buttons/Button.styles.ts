import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${(p) => p.color};
  width: 100px;
  height: 30px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  transition: 0.2s ease-in-out;
  font-weight: bold;
  :hover {
    cursor: pointer;
    filter: brightness(75%);
  }
  :disabled {
    opacity: 0.5;
  }
`;
