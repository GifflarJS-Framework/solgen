import { INewContract } from "@models/newcontract/types/INewContract";
import { IVariable } from "@models/variable/types/IVariable";
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

  write(variable: IVariable): string {
    let text = "";
    // If variable not an array, is the local variable definition

    if (variable.value) {
      const value = this._handleValue(variable.value);
      text += `${variable.type} ${variable.name} = ${value}`;
    } else {
      text += `${variable.type} ${variable.name}`;
    }

    return text;
  }
}

export default VariableWriter;
