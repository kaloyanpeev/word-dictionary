import { DefinitionTypes } from "../types/Definitions";

export const extractDefinitions = (definitions: DefinitionTypes[]) => {
  const newDefinitions: any = [
    ...new Set(definitions.map((o: any) => o.partOfSpeech)),
  ]
    .sort((a, b) => a.localeCompare(b))
    .map((d) => {
      return {
        name: d,
        definitions: definitions.filter((p) => p.partOfSpeech === d),
      };
    });

  return newDefinitions;
};
