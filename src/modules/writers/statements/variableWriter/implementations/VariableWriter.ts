import { ILocalVariable } from "@models/statements/variable/types/ILocalVariable";
import { inject, injectable } from "tsyringe";
import { IExpressionWriter } from "../../expressionWriter/types/IExpressionWriter";
import { IVariableWriter } from "../types/IVariableWriter";

@injectable()
class VariableWriter implements IVariableWriter {
  constructor(
    @inject("ExpressionWriter")
    private expressionWriter: IExpressionWriter
  ) {}

  write(variable: ILocalVariable): string {
    let text = "";

    // Writing data location text
    let dataLocationText = ``;
    if (variable.dataLocation) {
      dataLocationText = ` ${variable.dataLocation}`;
    }

    // Writing value text
    let valueText = ``;
    if (variable.expressionValue) {
      const value = this.expressionWriter.write(variable.expressionValue);
      valueText = ` = ${value}`;
    }

    // Writing final text
    text += `${variable.type}${dataLocationText} ${variable.name}${valueText}`;

    return text;
  }
}

export default VariableWriter;
