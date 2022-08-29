"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var expected = JSON.stringify(require("../../../../../test/examples/modeling/function-1.json"));
describe("Function Model", function () {
    var functionModel = tsyringe_1.container.resolve("FunctionModel");
    it("Creating", function () {
        // Creating function
        var myFunction = functionModel.execute({
            name: "myFunction",
            scope: "public",
        });
        // Setting up properties
        myFunction
            .setInput({ regularType: "string" }, "_message")
            .setOutput({ regularType: "string" })
            .setAssignment("message", "_message")
            .beginIf("val == 1")
            .setAssignment("message", "_message")
            .endIf();
        // Asserting result
        var result = myFunction.toString();
        expect(result).toEqual(expected);
    });
});
