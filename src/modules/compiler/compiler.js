const solc = require("solc");

function createCompiler() {
  /**
   * Compiles a Solidity code
   * @param {string} code
   */
  function compile(code) {
    const output = solc.compile(code, 1);
    return output;
  }

  return { compile };
}

module.exports = createCompiler;
