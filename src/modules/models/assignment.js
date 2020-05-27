/**
 * @author Levy Santiago
 * @module
 * @category Model
 * @name createAssignmentModel
 * @description A <b>Factory</b> for creating an assignment object model (json).
 * @param {string} _variable The variable where the value will be inserted.
 * @param {string} _value The value to be assigned to the variable.
 * @returns {Object} The assignment object model.
 * @example
 * Usage
 * const assignmentModel = createAssignmentModel("name", '"bob"');
 *
 * Return
 * {
 *   statement: "assignment",
 *   variable: "name",
 *   value: '"bob"',
 * }
 */
function createAssignmentModel(_variable, _value) {
  /**
   * @author Levy Santiago
   * @name assignment
   * @member {Object}
   * @description The assignment object model to be returned.
   * @property {string} statemtent The identificator of the statement.
   * @property {string} variable The variable where the value will be inserted.
   * @property {string} value The value to be assigned to the variable.
   * @example
   * {
   *   statement: "assignment",
   *   variable: "name",
   *   value: '"bob"',
   * }
   */
  const assignment = {
    statement: "assignment",
    variable: _variable,
    value: _value,
  };

  return assignment;
}

module.exports = createAssignmentModel;
