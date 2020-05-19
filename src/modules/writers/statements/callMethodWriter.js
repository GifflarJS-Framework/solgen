function createCallMethodWriter() {
  /**
   * @name write
   * @description Creates a Solidity array push statement
   * @param {string} json The json with the variable and value to be pushed to.
   * @returns {string} The Solidity code in string format.
   * @private
   * @example
   * Json
   * {
   *   statement: "push",
   *   variable: "messages",
   *   value: "_message"
   * }
   *
   * Return
   * "messages.push(_message);"
   */
  function write(json) {
    return json.variable + "." + json.statement + "(" + json.value + ");\n";
  }

  return { write };
}

module.exports = createCallMethodWriter;
