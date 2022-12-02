import React from "react";
import { DefinitionTypes } from "../../../../../types/Definitions";

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
      <div>
        <h3>{def.name}</h3>
        <ul>
          {def.definitions.map((definition) => {
            return <li>{definition.definition}</li>;
          })}
        </ul>
      </div>
    );
  });
  return <div>{renderedDefinitions}</div>;
};

export default Definitions;
