import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Word from "./components/WordComponent/Word";

const WordsPage = () => {
  return (
    <div>
      <SearchBar />
      <Word />
    </div>
  );
};

export default WordsPage;
