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
      let expression = json.value;
      // if (typeof expressionValue === "object") {
      // const expression: IExpression = createExpressionModel({
      //   value: expressionValue.value,
      // });
      const expressionText = expressionWriter.write(expression);
      // }
      const text = `${json.variable} = ${expressionText};\n`;
      return text;
    },
  };

  return assignmentWriter;
}

export default createAssignmentWriter;
