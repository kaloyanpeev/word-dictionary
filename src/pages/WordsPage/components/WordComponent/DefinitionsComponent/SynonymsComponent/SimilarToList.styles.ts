import styled from "styled-components";

interface ListProps {
  type: string;
}

export const StyledSimilarToList = styled.div<ListProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  span {
    margin-right: 10px;
    color: ${(props) => (props.type === "synonym" ? "lightgreen" : "tomato")};
  }
`;
