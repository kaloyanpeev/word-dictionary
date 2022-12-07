import styled from "styled-components";
import colors from "../../../../../../assets/ColorScheme";

export const StyledSimilarWordButton = styled.button`
  background-color: ${colors.bg2};
  color: ${colors.color2};
  box-sizing: border-box;
  padding: 5px 10px 5px 10px;
  border-radius: 32px;
  border: 1px solid white;

  margin-right: 5px;
  white-space: nowrap;
  margin-top: 5px;
  cursor: pointer;
  transition: 100ms ease-in-out;
  :hover {
    background-color: ${colors.bg3};
  }
`;
