import { IExpression } from "@models/expression/types/IExpression";
import { IExpressionWriter } from "../types/IExpressionWriter";

function createExpressionWriter(): IExpressionWriter {
  const expressionWriter: IExpressionWriter = {
    /**
     * @name write
     * @description Writes an expression statement in Solidity code.
     * @param {Object} json The expression statement in json format.
     * @returns {string} The expression statement in Solidity code as string.
     * @example
     * Input
     * {
     *     statement: "expression",
     *     value: "!((val+1)+(val+1))"
     *  }
     *
     *  Result
     *  "!((val+1)+(val+1))"
     */
    write(json_expression: IExpression): string {
      const text = json_expression.value;
      return text;
    },
  };

  return expressionWriter;
}

export default createExpressionWriter;
