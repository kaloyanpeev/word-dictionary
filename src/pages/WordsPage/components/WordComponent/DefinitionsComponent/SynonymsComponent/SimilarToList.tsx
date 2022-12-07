import React from "react";
import { SimilarWordsType } from "../../../../../../types/Synonyms";
import SimilarWordItem from "./SimilarWordItem";
import { StyledSimilarToList } from "./SimilarToList.styles";

const SimilarToList: React.FC<SimilarWordsType> = ({ similarWords, type }) => {
  const renderedSimilarItems = similarWords.map((s: string, index: number) => {
    return <SimilarWordItem similarWord={s} key={index} />;
  });
  return (
    <StyledSimilarToList type={type}>
      <span>{type === "synonym" ? "Similar:" : "Opposite:"}</span>
      {renderedSimilarItems}
    </StyledSimilarToList>
  );
};

export default SimilarToList;
