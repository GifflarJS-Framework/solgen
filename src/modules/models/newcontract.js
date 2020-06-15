function createNewContractModel(contractName, args = []) {
  const json = {
    statement: "newcontract",
    contractName: contractName,
    args: args,
  };

  return json;
}

module.exports = createNewContractModel;
