const createAssignmentModel = require("../../src/modules/models/assignment");
const helpers = require("../../src/utils/helpers");
const assert = require("assert");
const createValidator = require("../../src/modules/validation/validator");

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
      "Variable shoud be equal to '" + variable + "'"
    );
    // Value property
    assert.equal(
      assignmentModel.value,
      value,
      "Value shoud be equal to '" + value + "'"
    );
  });

  // Getting messages from validator for error testing
  const { messages } = createValidator();

  /**
   * Testing type Errors
   */
  it("Testing argument type error", () => {
    // Setting up error messages
    const message_1 = messages.wrongType("_variable", "string");
    const message_2 = messages.wrongType("_value", "string");
    const message_3 = message_1;

    // Asserting errors
    assert.throws(
      () => createAssignmentModel(1, "2"),
      Error(message_1),
      "Error should thrown [" + message_1 + "] (line 1)"
    );

    assert.throws(
      () => createAssignmentModel("val", 2),
      Error(message_2),
      "Error should thrown [" + message_2 + "] (line 2)"
    );

    assert.throws(
      () => createAssignmentModel(1, 2),
      Error(message_3),
      "Error should thrown [" + message_3 + "] (line 3)"
    );
  });

  /**
   * Testing required Errors
   */
  it("Testing argument required error", () => {
    // Setting up error messages
    const message_1 = messages.required("_variable");
    const message_2 = messages.required("_value");

    // Asserting errors
    assert.throws(
      () => createAssignmentModel(),
      Error(message_1),
      "Error should thrown [" + message_1 + "] (line 1)"
    );

    assert.throws(
      () => createAssignmentModel("val"),
      Error(message_2),
      "Error should thrown [" + message_2 + "] (line 2)"
    );
  });
});
