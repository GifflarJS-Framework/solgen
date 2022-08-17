import { INewContract } from "@models/newcontract/types/INewContract";
import { ILocalVariable } from "@models/variable/types/ILocalVariable";
import { INewContractWriter } from "@writers/statements/newContractWriter/types/INewContractWriter";
import { inject, injectable } from "tsyringe";
import { IVariableStatements } from "../types/IVariableStatements";
import { IVariableWriter } from "../types/IVariableWriter";

@injectable()
class VariableWriter implements IVariableWriter {
  constructor(
    @inject("NewContractWriter")
    private newContractWriter: INewContractWriter
  ) {}

  statements: IVariableStatements = {
    newcontract: this.newContractWriter.write,
  };

  _handleValue(value: string | INewContract) {
    // If the value is a statement
    if (typeof value !== "string") {
      const key: keyof IVariableStatements = value.statement;
      const handler = this.statements[key];
      // If the statement was found
      if (handler) {
        return handler(value);
      }

      // If not found throw error
      throw Error("Invalid statement inside variable.");
    }
    // If value is not a statement, return the same value
    else {
      return value;
    }
  }

  write(variable: ILocalVariable): string {
    let text = "";

    // Writing data location text
    let dataLocationText = ``;
    if (variable.dataLocation) {
      dataLocationText = ` ${variable.dataLocation}`;
    }

    // Writing value text
    let valueText = ``;
    if (variable.value) {
      const value = this._handleValue(variable.value);
      valueText = ` = ${value}`;
    }

    // Writing final text
    text += `${variable.type}${dataLocationText} ${variable.name}${valueText}`;

    return text;
  }
}

export default VariableWriter;
