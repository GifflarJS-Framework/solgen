import { ICreateVariableDTO } from "../types/ICreateVariableDTO";
import { ILocalVariable } from "../types/ILocalVariable";

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
  value = "",
}: ICreateVariableDTO): ILocalVariable {
  const variable: ILocalVariable = {
    statement: "variable",
    type,
    name,
    value,
  };

  return variable;
}

export default createVariableModel;
