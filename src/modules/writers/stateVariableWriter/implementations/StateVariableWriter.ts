import { IStateVariable } from "@models/stateVariable/types/IStateVariable";
import { IStateVariableWriter } from "../types/IStateVariableWriter";

class StateVariableWriter implements IStateVariableWriter {
  write(variables: Array<IStateVariable>): string {
    let text = "";
    text = "//VARIABLES\n";

    variables.map((v) => {
      // Type
      let variableText = `${v.type}`;

      // Scope
      if (v.scope) variableText += ` ${v.scope}`;

      // State mutability
      if (v.stateMutability) variableText += ` ${v.stateMutability}`;

      // Variable name
      variableText += ` ${v.name}`;

      // Value
      if (v.value) variableText += ` = ${v.value}`;

      text += `${variableText};\n`;

      return text;
    });
    text += "\n\n";

    return text;
  }
}

export default StateVariableWriter;
