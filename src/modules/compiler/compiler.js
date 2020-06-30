const solc = require("solc");

function createCompiler() {
  /**
   * Compiles a Solidity code
   * @param {string} code
   */
  function compile(code) {
    const output = solc.compile(
      JSON.stringify({
        language: "Solidity",
        sources: {
          jsons: {
            content: code,
          },
        },
        settings: {
          outputSelection: {
            // return everything
            "*": {
              "*": ["*"],
            },
          },
        },
      })
    );
    return JSON.parse(output);
  }

  return { compile };
}

module.exports = createCompiler;
