import { ICreateVariableDTO } from "../types/ICreateVariableDTO";
import { IVariable } from "../types/IVariable";

/**
 * @todo Finish documentation
 * @author Levy Santiago
 * @module
 * @category Model
 * @name createVariableModel
 * @description A <b>Factory</b> for creating a variable statement object model (json).
 * @param {string} type The type of the variable (string, uint, ...).
 * @param {string} name The name of the variable.
 * @param {string} [scope = ""] The scope of the varible (public, private).
 * @param {boolean} [setMethod = false] If you want to generate automatically the variable set function.
 * @param {string} [value = ""] The value to be assigned to the variable after the creation.
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
function createVariableModel({
  type,
  name,
  scope = "",
  setMethod = false,
  value = "",
}: ICreateVariableDTO): IVariable {
  if (scope) {
    return {
      type,
      name,
      scope,
      value,
      setMethod,
    };
  }
  return {
    statement: "variable",
    type,
    name,
    value,
  };
}

export default createVariableModel;
