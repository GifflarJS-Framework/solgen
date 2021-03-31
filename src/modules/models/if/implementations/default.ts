import createContentModel from "@models/content";
import { ICreateIf } from "../types/ICreateIf";
import { IIf } from "../types/IIf";

/**
 * @todo Finish documentation
 * @author Levy Santiago
 * @module
 * @category Model
 * @name createIfModel
 * @description A <b>Factory</b> for creating an if statement object model (json). In the
 * <b>Content Model</b>, the If Model receives all the content functions, because it's a statement
 * that can implements other statements.
 * @param {string} _condition The condition to be satisfied in if statement.
 * @param {boolean} _else If the else statement is enabled or not
 * @returns {Object} The if statement object model.
 * @example
 * Usage
 * const newIf = createIfModel("1 == 1");
 *
 * Return
 * {
 *   statement: "if",
 *   else: false,
 *   condition: "1 == 1",
 *   content: [],
 * }
 */
function createIfModel({ condition = "", onElse = false }: ICreateIf): IIf {
  /**
   * @todo Write documentation
   */
  const _if: IIf = {
    statement: "if",
    else: onElse || false,
    condition: condition || "",
    content: [],
  };

  return _if;
}

export default createIfModel;
