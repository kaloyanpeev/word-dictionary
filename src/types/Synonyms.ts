export interface SimilarWordsType {
  similarWords: string[];
  type: "synonym" | "antonym";
}

export interface SimilarWordItemProps {
  similarWord: string;
}
