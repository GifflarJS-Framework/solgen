function createContentWriter() {
  internal = {
    /**
     * Creates a Solidity assignment statement
     * @param {string} variable - The variable to assign the value to.
     * @param {string} value - The value to be assigned to the variable.
     */
    assignment: (json) => {
      return json.variable + " = " + json.value + "\n";
    },

    myif: (json) => {
      let text = "if(" + json.condition + "){\n";
      text += content(json.content);
      text += "}\n";

      return text;
    },
  };

  /**
   * Writes the content of another statement.
   * @param {Object} content - The Object content of the statement.
   * @returns {string} The content parsed to Solidity code as a string.
   */
  function content(jsoncontent) {
    let text = "";

    // Defining the statement content
    for (item in jsoncontent) {
      let handler = internal[item];
      if (handler) {
        text += handler(jsoncontent[item]);
      }
    }

    return text;
  }

  return { content };
}

module.exports = createContentWriter;
