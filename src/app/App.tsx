import React from "react";
import SearchBar from "../pages/WordsPage/components/SearchBar/SearchBar";
import Word from "../pages/WordsPage/components/WordComponent/Word";
import WordsPage from "../pages/WordsPage/WordsPage";

import { StyledApp } from "./App.styles";

const App = () => {
  return (
    <StyledApp>
      <WordsPage />
    </StyledApp>
  );
};

export default App;
