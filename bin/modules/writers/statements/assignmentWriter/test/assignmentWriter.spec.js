"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Assignment Writer", function () {
    it("Writing Assignment", function () {
        var assignmentWriter = tsyringe_1.container.resolve("AssignmentWriter");
        var assignment = {
            statement: "assignment",
            variable: "age",
            value: {
                statement: "expression",
                value: "20",
            },
        };
        var expected = "age = 20";
        var result = assignmentWriter.write(assignment);
        expect(result).toMatch(expected);
    });
});
