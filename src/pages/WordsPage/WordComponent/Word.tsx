import React, { useEffect } from "react";
import {
  useGetWordSearchMutation,
  wordApi,
} from "../../../store/slices/services/WordsApi";
import { StyledWordDiv } from "./Word.styles";
import WordData from "./WordData";

const Word = () => {
  const [getWordSearch, { isLoading, data, isError }] =
    useGetWordSearchMutation({
      fixedCacheKey: "shared-searchword",
    });

  if (!data && isLoading) {
    return <StyledWordDiv>Loading...</StyledWordDiv>;
  }
  if (isError) {
    return <StyledWordDiv>Error</StyledWordDiv>;
  }
  if (!data) {
    return <StyledWordDiv>Search for a word!</StyledWordDiv>;
  }

  return (
    <StyledWordDiv>
      <WordData wordData={data} />
    </StyledWordDiv>
  );
};

export default Word;
