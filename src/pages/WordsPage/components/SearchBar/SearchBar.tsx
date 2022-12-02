import React, { SyntheticEvent, useState } from "react";
import Button from "../../../../components/buttons/Button";
import { useGetWordSearchMutation } from "../../../../store/slices/services/WordsApi";

import { StyledSearchBar, StyledSearchForm } from "./SearchBar.styles";

const SearchBar = () => {
  const [getWordSearch] = useGetWordSearchMutation({
    fixedCacheKey: "shared-searchword",
  });
  const [word, setWord] = useState<string>("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    getWordSearch(word);
    setWord("");
  };
  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      <StyledSearchBar
        value={word}
        onChange={(e) => setWord(e.target.value)}
        type="text"
        placeholder="Search for a word..."
      />
      <Button text={"Search"} disabled={word === ""} />
    </StyledSearchForm>
  );
};

export default SearchBar;
