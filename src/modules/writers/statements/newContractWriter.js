const { getCommaExpression } = require("@utils/helpers");

function createNewContractWriter() {
  /**
   *
   * @param {Object} json
   * @example
   * Json
   * {
   *   statement: "newcontract",
   *   variable: "contract",
   *   contractName: "Contract",
   *   args: ["_owner"]
   * }
   */
  function write(json) {
    const args = getCommaExpression(json.args);
    const text = "new " + json.contractName + "(" + args + ")";

    return text;
  }

  return { write };
}

module.exports = createNewContractWriter;
