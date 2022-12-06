import React from "react";
import { DefinitionTypes } from "../../../../../types/Definitions";
import { StyledDefinitionsList } from "./Definitions.styles";

interface DefinitionObjectType {
  name: string;
  definitions: DefinitionTypes[];
}

interface DefinitionsProps {
  definitions: DefinitionObjectType[];
}

const Definitions: React.FC<DefinitionsProps> = ({ definitions }) => {
  const renderedDefinitions = definitions.map((def) => {
    return (
      <StyledDefinitionsList>
        <h3>{def.name}</h3>
        <ul>
          {def.definitions.map((definition) => {
            return <li>{definition.definition}</li>;
          })}
        </ul>
      </StyledDefinitionsList>
    );
  });
  return <div>{renderedDefinitions}</div>;
};

export default Definitions;
