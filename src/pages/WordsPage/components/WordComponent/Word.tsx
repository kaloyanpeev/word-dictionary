import React, { useEffect } from "react";
import LoadingDots from "../../../../components/loadingComponents/LoadingDots";
import { useGetWordSearchMutation } from "../../../../store/slices/services/WordsApi";
import { StyledWordDiv } from "./Word.styles";
import WordData from "./WordData";

const Word = () => {
  const [getWordSearch, { isLoading, data, isError, error }] =
    useGetWordSearchMutation({
      fixedCacheKey: "shared-searchword",
    });

  if (!data && isLoading) {
    return (
      <StyledWordDiv>
        <LoadingDots />
      </StyledWordDiv>
    );
  }
  if (isError && error?.status === 404) {
    return (
      <StyledWordDiv>
        <h1>Word not found! :(</h1>
      </StyledWordDiv>
    );
  }
  if (!data) {
    return <StyledWordDiv>...to find things about it!</StyledWordDiv>;
  }

  return (
    <StyledWordDiv>
      <WordData wordData={data} />
    </StyledWordDiv>
  );
};

export default Word;
