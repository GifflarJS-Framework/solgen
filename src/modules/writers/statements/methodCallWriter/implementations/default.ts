import { IMethodCall } from "@models/methodcall/types/IMethodCall";
import { IMethodCallWriter } from "../types/IMethodCallWriter";

function createMethodCallWriter(): IMethodCallWriter {
  const methodCallWriter: IMethodCallWriter = {
    /**
     * @name write
     * @description Creates a Solidity array push statement
     * @param {string} json The json with the variable and value to be pushed to.
     * @returns {string} The Solidity code in string format.
     * @private
     * @example
     * Json
     * {
     *   statement: "method_call",
     *   variable: "messages",
     *   method: "push",
     *   value: "_message"
     * }
     *
     * Return
     * "messages.push(_message);"
     */
    write(json: IMethodCall): string {
      return `${json.variable}.${json.method}(${json.value});\n`;
    },
  };

  return methodCallWriter;
}

export default createMethodCallWriter;
