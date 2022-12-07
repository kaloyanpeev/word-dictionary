import React from "react";
import { DefinitionItemTypes } from "../../../../../types/Definitions";
import { StyledDefinitionItem } from "./DefinitionItem.styles";
import SimilarToList from "./SynonymsComponent/SimilarToList";

const DefinitionItem: React.FC<DefinitionItemTypes> = ({ data, index }) => {
  return (
    <StyledDefinitionItem key={index}>
      <span>
        {index + 1}. {data.definition}
      </span>
      {data.synonyms && (
        <SimilarToList similarWords={data.synonyms} type={"synonym"} />
      )}
      {data.antonyms && (
        <SimilarToList similarWords={data.antonyms} type={"antonym"} />
      )}
    </StyledDefinitionItem>
  );
};

export default DefinitionItem;
