"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Require Model", function () {
    var requireModel = tsyringe_1.container.resolve("RequireModel");
    it("Creating Require Model", function () {
        var require = requireModel.execute({ condition: "a == b" });
        var expected = {
            statement: "require",
            condition: "a == b",
        };
        expect(require).toEqual(expected);
    });
    it("Creating Require Model with error message", function () {
        var require = requireModel.execute({
            condition: "a == b",
            errorMessage: "a must be equal to b",
        });
        var expected = {
            statement: "require",
            condition: "a == b",
            errorMessage: "a must be equal to b",
        };
        expect(require).toEqual(expected);
    });
});
