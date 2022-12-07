import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Word from "./components/WordComponent/Word";
import { StyledWordsPageDiv } from "./WordsPage.styles";

const WordsPage = () => {
  return (
    <StyledWordsPageDiv>
      <SearchBar />
      <Word />
    </StyledWordsPageDiv>
  );
};

export default WordsPage;
