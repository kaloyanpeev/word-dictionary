import styled from "styled-components";
import colors from "../../../../assets/ColorScheme";

export const StyledSearchBar = styled.input`
  width: 100%;
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
  justify-content: space-between;
  margin-bottom: 25px;
  margin-top: 100px;
`;
