import React from "react";
import { WordDataTypes } from "../../../utils/interfaces";

interface WordDataProps {
  wordData: WordDataTypes;
}

const WordData: React.FC<WordDataProps> = ({ wordData }) => {
  return <div>WordData</div>;
};

export default WordData;
