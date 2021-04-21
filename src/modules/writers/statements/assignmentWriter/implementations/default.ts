import { IAssignment } from "@models/assignment/types/IAssignment";
import { IExpression } from "@models/expression/types/IExpression";
import createExpressionModel from "@models/expression";
import createExpressionWriter from "../../expressionWriter";
import { IAssignmentWriter } from "../types/IAssignmentWriter";

function createAssignmentWriter(): IAssignmentWriter {
  const expressionWriter = createExpressionWriter();

  const assignmentWriter: IAssignmentWriter = {
    /**
     * @name write
     * @description Creates a Solidity assignment statement
     * @param {string} json The json with the variable and value to be assigned to.
     * @returns {string} The Solidity code in string format.
     * @private
     * @example
     * Json
     * {
     *   statement: "assignment",
     *   variable: "message",
     *   value: "_message"
     * }
     *
     * Return
     * "message = _message;"
     */
    write(json: IAssignment): string {
      let expressionValue = json.value;
      if (typeof expressionValue === "object") {
        const expression: IExpression = createExpressionModel({
          value: expressionValue,
        });
        expressionValue = expressionWriter.write(expression);
      }
      const text = `${json.variable} = ${expressionValue};\n`;
      return text;
    },
  };

  return assignmentWriter;
}

export default createAssignmentWriter;
