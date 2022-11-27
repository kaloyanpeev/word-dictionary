import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import Word from "./WordComponent/Word";

const WordsPage = () => {
  return (
    <div>
      <SearchBar />
      <Word />
    </div>
  );
};

export default WordsPage;
