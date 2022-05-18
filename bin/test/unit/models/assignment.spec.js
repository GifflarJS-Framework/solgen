"use strict";
var assert = require("assert");
var createAssignmentModel = require("../../../modules/models/assignment");
var helpers = require("../../../utils/helpers");
var createValidator = require("../../../modules/validation/validator");
/**
 * Testing Assignment Model
 */
describe("Assignment Model", function () {
    var statement = "assignment";
    var variable = "val";
    var value = "1";
    var assignmentModel = createAssignmentModel(variable, value);
    /**
     * If object was sussessfuly created
     */
    it("Asserting object", function () {
        // Asserting if is an object
        assert.ok(helpers.isObject(assignmentModel), "Model is not an Object.");
        // Asserting if the object is not empty
        assert.ok(!helpers.isObjEmpty(assignmentModel), "Object is empty.");
    });
    /**
     * Initial properties
     */
    it("Asserting initial properties", function () {
        // Statement property
        assert.equal(assignmentModel.statement, statement, "Statement shoud be equal to 'assignment'");
        // Variable property
        assert.equal(assignmentModel.variable, variable, "Variable shoud be equal to '".concat(variable, "'"));
        // Value property
        assert.equal(assignmentModel.value, value, "Value shoud be equal to '".concat(value, "'"));
    });
});
