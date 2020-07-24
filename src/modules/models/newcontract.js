const createValidator = require("../validation/validator");

function createNewContractModel(contractName, args = []) {
  //Validating
  const validator = createValidator();
  const validation = [
    {
      arg: "contractName",
      attribute: contractName,
      type: "string",
      required: true,
    },
    {
      arg: "args",
      attribute: args,
      type: "object",
      isArray: true,
      required: false,
    },
  ];
  validator.validate(validation);

  const json = {
    statement: "newcontract",
    contractName: contractName,
    args: args,
  };

  return json;
}

module.exports = createNewContractModel;
