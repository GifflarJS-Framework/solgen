const createAssignmentModel = require("./assignment");
const createIfModel = require("./if");

/**
 * @example
 * {
 *  name: "_name",
 *  scope: "_scope",
 *  inputs = [],
 *  _isConstructor: false
 * }
 */
function createContentModel() {
  const stack = [
    {
      content: [],
    },
  ];
  let top = 0;

  /**
   *
   * @param {Object} obj
   * @private
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

    return obj;
  }

  function setAssignment(variable, expression = undefined) {
    const newAssignment = createAssignmentModel(variable, expression);

    stack[top].content.push(newAssignment);

    return stack[top];
  }

  function setCallEvent(event) {
    stack[top].content.push(event);
    return stack[top];
  }

  function beginIf(_condition, _else) {
    let newIf = createIfModel(_condition, _else);
    newIf = _assignFunctions(newIf);
    stack.push(newIf);
    top++;
    return stack[top];
  }

  function beginElseIf(_condition) {
    if (!_condition) {
      throw new Error("Condition cannot be ommited.");
    }
    return beginIf(_condition, true);
  }

  function beginElse(_condition) {
    return beginIf(_condition, true);
  }

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
