const { isObject } = require("../../utils/helpers");

function createExpressionWriter() {
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
  function write(json_expression) {
    const text = json_expression.value;

    return text;
  }
  return {
    write,
  };
}

module.exports = createExpressionWriter;
