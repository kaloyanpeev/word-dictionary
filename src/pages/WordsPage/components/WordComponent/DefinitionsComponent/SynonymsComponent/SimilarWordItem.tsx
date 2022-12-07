import React from "react";
import { useGetWordSearchMutation } from "../../../../../../store/slices/services/WordsApi";
import { SimilarWordItemProps } from "../../../../../../types/Synonyms";
import { StyledSimilarWordButton } from "./SimilarWordItem.styles";

const SimilarWordItem: React.FC<SimilarWordItemProps> = ({ similarWord }) => {
  const [getWordSearch] = useGetWordSearchMutation({
    fixedCacheKey: "shared-searchword",
  });

  const handleSynonymFetch = (similarWord: string) => {
    getWordSearch(similarWord);
  };
  return (
    <div>
      <StyledSimilarWordButton onClick={() => handleSynonymFetch(similarWord)}>
        {similarWord}
      </StyledSimilarWordButton>
    </div>
  );
};

export default SimilarWordItem;
