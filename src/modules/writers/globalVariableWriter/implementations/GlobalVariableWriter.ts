import { IGlobalVariable } from "@models/globalVariable/types/IGlobalVariable";
import { IGlobalVariableWriter } from "../types/IGlobalVariableWriter";

class GlobalVariableWriter implements IGlobalVariableWriter {
  write(variables: IGlobalVariable | Array<IGlobalVariable>): string {
    let text = "";
    text = "//VARIABLES\n";
    let variableList: IGlobalVariable[] = [];
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

export default GlobalVariableWriter;
