import { IStateVariable } from "@models/definitions/stateVariable/types/IStateVariable";
import { IExpressionModel } from "@modules/models/statements/expression/types/IExpressionModel";
import { IExpressionWriter } from "@modules/writers/statements/expressionWriter/types/IExpressionWriter";
import { inject, injectable } from "tsyringe";
import { IStateVariableWriter } from "../types/IStateVariableWriter";

@injectable()
class StateVariableWriter implements IStateVariableWriter {
  constructor(
    @inject("ExpressionWriter")
    private expressionWriter: IExpressionWriter,
    @inject("ExpressionModel")
    private expressionModel: IExpressionModel
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
      if (v.expressionValue) {
        const expression = this.expressionModel.execute({
          value: v.expressionValue,
        });
        variableText += ` = ${this.expressionWriter.write(expression)}`;
      }

      text += `${variableText};\n`;

      return text;
    });
    text += "\n\n";

    return text;
  }
}

export default StateVariableWriter;
