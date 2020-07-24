const createValidator = require("../validation/validator");
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
 * @param {boolean} [_isConstructor = false] If the function is a constructor.
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
  _isConstructor,
  _inputs,
  _outputs,
  globalVars
) {
  //Validating
  const validator = createValidator();
  const validation = [
    {
      arg: "_name",
      attribute: _name,
      type: "string",
      required: false, // because we have the constructor
    },
    {
      arg: "_scope",
      attribute: _scope,
      type: "string",
      required: true,
    },
    {
      arg: "_isConstructor",
      attribute: _isConstructor,
      type: "boolean",
      required: false,
    },
    {
      arg: "_inputs",
      attribute: _inputs,
      type: "object",
      isArray: true,
      required: false,
    },
    {
      arg: "_outputs",
      attribute: _outputs,
      type: "object",
      isArray: true,
      required: false,
    },
    {
      arg: "globalVars",
      attribute: globalVars,
      type: "object",
      isArray: true,
      required: false,
    },
  ];
  validator.validate(validation);

  const content_json = createContentModel(globalVars);
  /**
   * @todo Write documentation
   */
  let myFunction = {
    name: _name,
    scope: _scope,
    isConstructor: _isConstructor ? _isConstructor : false,
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
    //Validating
    const inputValidation = [
      {
        arg: "type",
        attribute: type,
        type: "string",
        required: true,
      },
      {
        arg: "variable",
        attribute: variable,
        type: "string",
        required: true,
      },
    ];
    validator.validate(inputValidation);

    // Creating input
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
    //Validating
    const outputValidation = [
      {
        arg: "variable",
        attribute: variable,
        type: "string",
        required: true,
      },
    ];
    validator.validate(outputValidation);

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
