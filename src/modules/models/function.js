const createContentModel = require("./content");

/**
 * @todo Finish documentation
 * @author Levy Santiago
 * @module
 * @category Model
 * @name createFunctionModel
 * @description A <b>Factory</b> for creating a function object model (json).
 * @param {string} _name The name of the function.
 * @param {string} _scope The scope of the function (public, private).
 * @param {boolean} [_is_constructor = false] If the function is a constructor.
 * @param {Object[]} [_inputs = []] The inputs of the function.
 * @param {Object[]} [_outputs = []] The values that the function will return.
 * @returns {Object} The function object model.
 * @requires createContentModel
 * @example
 * Usage
 * const myFunction = createFunctionModel("myFunction", "public");
 *
 * Return
 * {
 *  name: "myFunction",
 *  scope: "public",
 *  _isConstructor: false,
 *  inputs: [],
 *  outputs: []
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
