"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
describe("Type Model", function () {
    var typeModel = tsyringe_1.container.resolve("TypeModel");
    it("Creating Type", function () {
        var type = typeModel.execute({ identifier: "my_uint", type: "uint" });
        var expected = {
            identifier: "my_uint",
            type: "uint",
        };
        expect(JSON.stringify(type)).toEqual(JSON.stringify(expected));
    });
});
