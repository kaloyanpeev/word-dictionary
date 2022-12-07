import React from "react";
import { DefinitionTypes } from "../../../../../types/Definitions";
import DefinitionItem from "./DefinitionItem";
import { StyledDefinitionsList } from "./Definitions.styles";

interface DefinitionObjectType {
  name: string;
  definitions: DefinitionTypes[];
}

interface DefinitionsProps {
  definitions: DefinitionObjectType[];
}

const Definitions: React.FC<DefinitionsProps> = ({ definitions }) => {
  const renderedDefinitions = definitions.map((def, index) => {
    return (
      <StyledDefinitionsList key={index}>
        <h3>{def.name}</h3>
        <ul>
          {def.definitions.map((definition, index) => {
            return (
              <DefinitionItem key={index} index={index} data={definition} />
            );
          })}
        </ul>
      </StyledDefinitionsList>
    );
  });
  return <div>{renderedDefinitions}</div>;
};

export default Definitions;
