import { IStateVariable } from "@models/stateVariable/types/IStateVariable";
import { IStateVariableWriter } from "../types/IStateVariableWriter";

class StateVariableWriter implements IStateVariableWriter {
  write(variables: IStateVariable | Array<IStateVariable>): string {
    let text = "";
    text = "//VARIABLES\n";
    let variableList: IStateVariable[] = [];
    if (Array.isArray(variables)) {
      variableList = variables;
    } else {
      variableList = [variables];
    }

    variableList.map((v) => {
      if (v.scope) {
        text += `${v.type} ${v.scope} ${v.name}`;
        if (v.value) {
          text += ` = ${v.value}`;
        } else {
          text += "";
        }
        text += ";\n";
      }
      return text;
    });
    text += "\n\n";

    return text;
  }
}

export default StateVariableWriter;
