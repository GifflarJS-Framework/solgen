module.exports = () => {
  return {
    write: json => {
      if (!json) {
        return false;
      }

      let text = "";

      // Writing the compiler version
      text += "pragma solidity ^0.4.23;\n\n";

      // Initing the contract
      text += "contract " + json.name + "{\n";
      text += "// VARIABLES\n";

      json.content.variables.map(v => {
        text += v.type + " " + v.scope + " " + v.name + ";\n";
      });

      // Closing contract definition
      text += "}";

      return text;
    }
  };
};
