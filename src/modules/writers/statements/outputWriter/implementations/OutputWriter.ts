import { IVariable } from "@models/variable/types/IVariable";
import helpers from "@utils/helpers";
import { IOutputWriter } from "../types/IOutputWriter";
import { IOutputWriterCallbackObject } from "../types/IOutputWriterCallbackObject";

class OutputWriter implements IOutputWriter {
  write(
    outputs: Array<string>,
    variables: Array<IVariable> = [],
    callback: (object: IOutputWriterCallbackObject) => void
  ): string {
    let text_return = "";
    let text_returns = "";
    const values: Array<string> = [];
    const types: Array<string> = [];

    if (outputs) {
      outputs.map((output) => {
        const variable = variables.filter((variableItem) => {
          return variableItem.name === output;
        });

        if (variable[0]) {
          values.push(variable[0].name);
          types.push(variable[0].type);
        }
        return variable;
      });
      if (values.length && types.length) {
        text_return += helpers.getCommaExpression(values);
        text_returns += helpers.getCommaExpression(types);

        text_return = `return (${text_return});\n`;
        text_returns = `returns (${text_returns})`;
      }
    }

    if (typeof callback === "function") {
      callback({ text_returns });
    }

    return text_return;
  }
}

export default OutputWriter;
