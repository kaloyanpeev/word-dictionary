import React, { useMemo } from "react";
import { extractDefinitions } from "../../../../helpers/extractDefinitions";
import { WordDataTypes } from "../../../../types/WordData";
import Definitions from "./DefinitionsComponent/Definitions";
import { StyledWordDataDiv } from "./WordData.styles";

interface WordDataProps {
  wordData: WordDataTypes;
}

const WordData: React.FC<WordDataProps> = ({ wordData }) => {
  const syllables = wordData.syllables?.list?.map((s) => s).join("-");

  const pronunciations =
    useMemo(
      () => [...new Set(Object.values((wordData?.pronunciation as any) || []))],
      [wordData]
    ) || [];

  const renderedPronunciations = useMemo(
    () => pronunciations?.map((p) => p).join(", "),
    [pronunciations]
  );

  const definitions: any = useMemo(
    () => wordData.results?.filter((d) => Object.hasOwn(d, "definition")),
    [wordData]
  );

  return (
    <StyledWordDataDiv>
      <div className="top-row">
        <h1>{wordData.word}</h1>
        <div>
          {wordData.syllables &&
            wordData.syllables?.list?.length > 1 &&
            syllables}
        </div>
      </div>
      {renderedPronunciations && (
        <div className="bottom-row">/{renderedPronunciations}/</div>
      )}
      <Definitions definitions={extractDefinitions(definitions)} />
    </StyledWordDataDiv>
  );
};

export default WordData;
