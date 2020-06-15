/**
 * @todo Finish documentation
 * @author Levy Santiago
 * @module
 * @category Model
 * @name createVariableModel
 * @description A <b>Factory</b> for creating a variable statement object model (json).
 * @param {string} _type The type of the variable (string, uint, ...).
 * @param {string} _name The name of the variable.
 * @param {string} [_scope = ""] The scope of the varible (public, private).
 * @param {string} [_setMethod = false] If you want to generate automatically the variable set function.
 * @param {string} [_value = ""] The value to be assigned to the variable after the creation.
 * This value actually can receive an statement object too.
 * @returns {Object} The if statement object model.
 * @example
 * Usage
 * const newVariable = createVariableModel("string", "name", "public", false, "hello");
 *
 * Return
 * {
 *   type: "string",
 *   name: "name",
 *   scope: "public",
 *   setMethod: false,
 *   value: "hello"
 * }
 */
function createVariableModel(
  _type,
  _name,
  _scope = "",
  _setMethod = false,
  _value = ""
) {
  let variable = {};
  if (_scope) {
    variable = {
      type: _type,
      name: _name,
      scope: _scope,
      value: _value,
      setMethod: _setMethod,
    };
  } else {
    variable = {
      statement: "variable",
      type: _type,
      name: _name,
      value: _value,
    };
  }

  return variable;
}

module.exports = createVariableModel;
