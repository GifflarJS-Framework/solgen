const createExpressionWriter = require("./expressionWriter");

function createAssignmentWriter() {
  const expressionWriter = createExpressionWriter();

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
  function write(json) {
    let expression = json.value;
    if (typeof expression === "object") {
      expression = expressionWriter.write(json.value);
    }
    const text = json.variable + " = " + expression + ";\n";
    return text;
  }

  return { write };
}

module.exports = createAssignmentWriter;
