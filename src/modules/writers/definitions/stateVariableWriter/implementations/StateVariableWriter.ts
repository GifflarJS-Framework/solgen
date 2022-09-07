import { IStateVariable } from "@models/definitions/stateVariable/types/IStateVariable";
import { IExpressionWriter } from "@modules/writers/statements/expressionWriter/types/IExpressionWriter";
import { inject, injectable } from "tsyringe";
import { IStateVariableWriter } from "../types/IStateVariableWriter";

@injectable()
class StateVariableWriter implements IStateVariableWriter {
  constructor(
    @inject("ExpressionWriter")
    private expressionWriter: IExpressionWriter
  ) {}

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
      if (v.expressionValue)
        variableText += ` = ${this.expressionWriter.write(v.expressionValue)}`;

      text += `${variableText};\n`;

      return text;
    });
    text += "\n\n";

    return text;
  }
}

export default StateVariableWriter;
