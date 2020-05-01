module.exports = {
  /**
   * Compiles a Solidity code
   * @param {string} code
   */
  compile: code => {
    const output = solc.compile(code, 1);

    return output;
  }
};
