"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var example_interface_1 = require("../../../../../test/examples/modeling/interface-1.json");
var example_interface_2 = require("../../../../../test/examples/modeling/interface-2.json");
describe("InterfaceModel", function () {
    var interfaceModel = tsyringe_1.container.resolve("InterfaceModel");
    it("Creating Interface", function () {
        var _interface = interfaceModel.execute("MyInterface");
        // Creating events
        _interface.createEvent("transferedOwnership", [
            { name: "oldOwner", type: "address" },
            { name: "newOwner", type: "address" },
        ]);
        _interface
            .createFunction("setOwner")
            .setInput({ regularType: "address" }, "newOwner")
            .setOutput({ regularType: "bool" });
        // Expected value
        var expected_model = JSON.stringify(example_interface_1);
        // Asserting the result
        expect(_interface.toString()).toEqual(JSON.stringify(JSON.parse(expected_model)[0]));
    });
    it("Creating Interface with inheritance", function () {
        var _interface = interfaceModel.execute("MyInterface");
        // Setting inheritance
        _interface.setInheritance("InheritableInterface", ["'0x0c'"]);
        // Creating events
        _interface.createEvent("transferedOwnership", [
            { name: "oldOwner", type: "address" },
            { name: "newOwner", type: "address" },
        ]);
        _interface
            .createFunction("setOwner")
            .setInput({ regularType: "address" }, "newOwner")
            .setOutput({ regularType: "bool" });
        // Expected value
        var expected_model = JSON.stringify(example_interface_2);
        // Asserting the result
        expect(_interface.toString()).toEqual(JSON.stringify(JSON.parse(expected_model)[0]));
    });
});
