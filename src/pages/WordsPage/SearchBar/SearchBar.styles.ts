import styled from "styled-components";
import colors from "../../../assets/ColorScheme";

export const StyledSearchBar = styled.input`
  width: 400px;
  height: 30px;
  font-size: 20px;
  transition: 0.1s ease-in-out;
  border-radius: 5px;
  border: none;
  box-sizing: border-box;
  padding-left: 5px;
  :focus {
    outline: 3px solid ${colors.color4};
    border-radius: 5px;
  }
  margin-right: 10px;
`;

export const StyledSearchForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
`;
