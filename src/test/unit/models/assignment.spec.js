const assert = require("assert");
const createAssignmentModel = require("../../../modules/models/assignment");
const helpers = require("../../../utils/helpers");
const createValidator = require("../../../modules/validation/validator");

/**
 * Testing Assignment Model
 */
describe("Assignment Model", () => {
  const statement = "assignment";
  const variable = "val";
  const value = "1";
  const assignmentModel = createAssignmentModel(variable, value);

  /**
   * If object was sussessfuly created
   */
  it("Asserting object", () => {
    // Asserting if is an object
    assert.ok(helpers.isObject(assignmentModel), "Model is not an Object.");
    // Asserting if the object is not empty
    assert.ok(!helpers.isObjEmpty(assignmentModel), "Object is empty.");
  });

  /**
   * Initial properties
   */
  it("Asserting initial properties", () => {
    // Statement property
    assert.equal(
      assignmentModel.statement,
      statement,
      "Statement shoud be equal to 'assignment'"
    );
    // Variable property
    assert.equal(
      assignmentModel.variable,
      variable,
      `Variable shoud be equal to '${variable}'`
    );
    // Value property
    assert.equal(
      assignmentModel.value,
      value,
      `Value shoud be equal to '${value}'`
    );
  });
});
