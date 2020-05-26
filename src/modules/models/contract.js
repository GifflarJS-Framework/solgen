const createVariableModel = require("./variable");
const createFunctionModel = require("./function");
const createEventModel = require("./callevent");

function createContractModel(_name) {
  const contract = {
    name: _name,
    contract: {
      variables: [],
      functions: [],
    },
  };

  function createEvent(_name, _inputs = []) {
    const newCallEvent = createEventModel(_name, _inputs);
    return newCallEvent;
  }

  function createVariable(_type, _name) {
    const variable = createVariableModel(_type, _name);
    contract.contract.variables.push(variable);

    return variable;
  }

  function createConstructor(_scope, _inputs, _outputs) {
    const _function = createFunctionModel(_scope, true, _inputs, _outputs);
    contract.contract.functions.push(_function);

    return _function;
  }

  function createFunction(_name, _scope, _inputs, _outputs) {
    const _function = createFunctionModel(
      _name,
      _scope,
      false,
      _inputs,
      _outputs
    );
    contract.contract.functions.push(_function);

    return _function;
  }

  contract.createVariable = createVariable;
  contract.createFunction = createFunction;
  contract.createConstructor = createConstructor;
  contract.createEvent = createEvent;

  return contract;
}

module.exports = createContractModel;
