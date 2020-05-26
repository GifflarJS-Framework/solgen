const createContentModel = require("./content");

/**
 * @example
 * {
 *  name: "_name",
 *  scope: "_scope",
 *  inputs = [],
 *  _isConstructor: false
 * }
 */
function createFunctionModel(
  _name,
  _scope,
  _is_constructor,
  _inputs,
  _outputs
) {
  const content_json = createContentModel();
  let myFunction = {
    name: _name,
    scope: _scope,
    isConstructor: _is_constructor ? _is_constructor : false,
    inputs: _inputs ? _inputs : [],
    outputs: _outputs ? _outputs : [],
    ...content_json,
  };

  function json() {
    const json = {};
    json.name = myFunction.name;
    json.scope = myFunction.scope;
    json.isConstructor = myFunction.isConstructor;
    json.inputs = myFunction.inputs;
    json.outputs = myFunction.outputs;
    json.content = myFunction.content;

    return json;
  }

  function setInput(type, variable) {
    const newInput = {
      name: variable,
      type: type,
    };

    myFunction.inputs.push(newInput);

    return myFunction;
  }

  function setOutput(variable) {
    myFunction.outputs.push(variable);

    return myFunction;
  }

  // Matching the internal functions
  myFunction.setInput = setInput;
  myFunction.setOutput = setOutput;
  myFunction.json = json;

  return myFunction;
}

module.exports = createFunctionModel;
