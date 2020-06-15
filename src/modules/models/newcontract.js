function createNewContractModel(variable, contractName, args = []) {
  const json = {
    statement: "newcontract",
    variable: variable,
    contractName: contractName,
    args: args,
  };

  return json;
}

module.exports = createNewContractModel;
