function createVariableWriter() {
  /**
   * Define the variables of the contract
   * @param {*} json_variables
   * @private
   */
  function write(variables) {
    text = "// VARIABLES\n";
    variables.map((v) => {
      text += v.type + " " + v.scope + " " + v.name + ";\n";
    });

    text += "\n\n";

    return text;
  }

  return { write };
}

module.exports = createVariableWriter;
