const createAssignmentModel = require("./assignment");
const createVariableModel = require("./variable");
const createIfModel = require("./if");

/**
 * @author Levy Santiago
 * @module
 * @category Model
 * @name createContentModel
 * @description A <b>Factory</b> for creating an content object model (json).
 * This object is used for creating all content statements like ifs, assignments...
 * It is most used only for components which has a content (function, if, ...).
 * @returns {Object} The content object model.
 * @requires createAssignmentModel
 * @requires createVariableModel
 * @requires createIfModel
 * @example
 * Usage
 * const contentModel = createContentModel();
 *
 * Return
 * {
 *   content: []
 *   beginIf: [Function],
 *   beginElseIf: [Function],
 *   beginElse: [Function],
 *   endIf: [Function],
 *   endElse: [Function],
 *   endElseIf: [Function]
 *   setCallEvent: [Function]
 *   setAssignment: [Function],
 *   setVariable: [Function]
 * }
 *
 */
function createContentModel() {
  const stack = [
    {
      content: [],
    },
  ];
  let top = 0;

  /**
   * @author Levy Santiago
   * @name _assignFunctions
   * @method
   * @private
   * @description Assign the statements functions needed to build the content.
   * @member {Function}
   * @param {Object} obj The current json content object.
   * @returns {Object} The same object with all statement functions assigned.
   * @example
   * const json = _assignFunctions(obj);
   */
  function _assignFunctions(obj) {
    obj.beginIf = beginIf;
    obj.beginElse = beginElse;
    obj.beginElseIf = beginElseIf;
    obj.endIf = endIf;
    obj.endElse = endIf;
    obj.endElseIf = endIf;
    obj.setCallEvent = setCallEvent;
    obj.setAssignment = setAssignment;
    obj.setVariable = setVariable;

    return obj;
  }

  /**
   * @author Levy Santiago
   * @name setVariable
   * @method
   * @description Sets a new variable declaration inside the content.
   * @member {Function}
   * @param {string} _type The type of the variable ("string", "uint", ...)
   * @param {string} _name The variable name.
   * @param {string} [_value] The eventual value to be assigned to it during the declaration.
   * @returns {Object} The content object model with the new variable added.
   * @example
   * Usage
   * contentModel.setVariable("string", "name", "bob");
   *
   * Return
   * {
   *   content: [
   *     {
   *       statement: "variable",
   *       type: "string",
   *       name: "name",
   *       value: "bob"
   *     }
   *   ]
   * }
   */
  function setVariable(_type, _name, _value) {
    const newVariable = createVariableModel(_type, _name, "", false, _value);
    stack[top].content.push(newVariable);
    return stack[top];
  }

  /**
   * @todo Write documentation
   */
  function setAssignment(variable, expression = undefined) {
    const newAssignment = createAssignmentModel(variable, expression);
    stack[top].content.push(newAssignment);
    return stack[top];
  }

  /**
   * @todo Write documentation
   */
  function setCallEvent(event) {
    stack[top].content.push(event);
    return stack[top];
  }

  /**
   * @todo Write documentation
   */
  function beginIf(_condition, _else) {
    let newIf = createIfModel(_condition, _else);
    newIf = _assignFunctions(newIf);
    stack.push(newIf);
    top++;
    return stack[top];
  }

  /**
   * @todo Write documentation
   */
  function beginElseIf(_condition) {
    if (!_condition) {
      throw new Error("Condition cannot be ommited.");
    }
    return beginIf(_condition, true);
  }

  /**
   * @todo Write documentation
   */
  function beginElse(_condition) {
    return beginIf(_condition, true);
  }

  /**
   * @todo Write documentation
   */
  function endIf() {
    if (stack.length > 1) {
      const json = stack.pop();
      stack[--top].content.push(json);
    }
    return stack[top];
  }

  // Matching the internal functions
  const json = _assignFunctions(stack[top]);

  return json;
}

module.exports = createContentModel;
