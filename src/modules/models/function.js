const createContentModel = require("./content");

/**
 * @todo Write documentation
 * @module
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
  /**
   * @todo Write documentation
   */
  let myFunction = {
    name: _name,
    scope: _scope,
    isConstructor: _is_constructor ? _is_constructor : false,
    inputs: _inputs ? _inputs : [],
    outputs: _outputs ? _outputs : [],
    ...content_json,
  };

  /**
   * @todo Write documentation
   */
  function json() {
    const jsonfunction = JSON.stringify(myFunction);
    return JSON.parse(jsonfunction);
  }

  /**
   * @todo Write documentation
   */
  function toString() {
    return JSON.stringify(myFunction);
  }

  /**
   * @todo Write documentation
   */
  function setInput(type, variable) {
    const newInput = {
      name: variable,
      type: type,
    };

    myFunction.inputs.push(newInput);

    return myFunction;
  }

  /**
   * @todo Write documentation
   */
  function setOutput(variable) {
    myFunction.outputs.push(variable);

    return myFunction;
  }

  // Matching the internal functions
  myFunction.setInput = setInput;
  myFunction.setOutput = setOutput;
  myFunction.toString = toString;
  myFunction.json = json;

  return myFunction;
}

module.exports = createFunctionModel;
