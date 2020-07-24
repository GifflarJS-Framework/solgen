const createValidator = require("../validation/validator");

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
function createIfModel(_condition = "", _else = false) {
  //Validating
  const validator = createValidator();
  const validation = [
    {
      arg: "_condition",
      attribute: _condition,
      type: "string",
      required: false,
    },
    {
      arg: "_else",
      attribute: _else,
      type: "boolean",
      required: false,
    },
  ];
  validator.validate(validation);

  /**
   * @todo Write documentation
   */
  let _if = {
    statement: "if",
    else: _else ? _else : false,
    condition: _condition ? _condition : "",
    content: [],
  };

  return _if;
}

module.exports = createIfModel;
