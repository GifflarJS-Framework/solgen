const createAssignmentModel = require("../../src/modules/models/assignment");
const helpers = require("../../src/utils/helpers");
const assert = require("assert");

describe("Assignment Model", () => {
  const statement = "assignment";
  const variable = "val";
  const value = "1";
  const assignmentModel = createAssignmentModel(variable, value);
  it("Asserting object", () => {
    // Asserting if is an object
    assert.ok(helpers.isObject(assignmentModel), "Model is not an Object.");
    // Asserting if the object is not empty
    assert.ok(!helpers.isObjEmpty(assignmentModel), "Object is empty.");
  });

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

  //   it("Testing argument complete fault", () => {
  //     let assignmentModel = createAssignmentModel(1, 2);
  //     console.log(assignmentModel);
  //   });
});
