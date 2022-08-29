"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var fs_1 = __importDefault(require("fs"));
var example_interface_1 = require("../../../../test/examples/modeling/interface-1.json");
var example_interface_2 = require("../../../../test/examples/modeling/interface-2.json");
var writing_path = __dirname + "/../../../../test/examples/writing/";
describe("GifflarInterface", function () {
    var gifflarInterfaceModel = tsyringe_1.container.resolve("GifflarInterfaceModel");
    it("Writing Gifflar Interface", function () {
        var gInterface = gifflarInterfaceModel.execute("MyInterface");
        // Creating events
        gInterface.createEvent("transferedOwnership", [
            { name: "oldOwner", type: "address" },
            { name: "newOwner", type: "address" },
        ]);
        gInterface
            .createFunction("setOwner")
            .setInput({ regularType: "address" }, "newOwner")
            .setOutput({ regularType: "bool" });
        // Expected value
        var expected_model = JSON.stringify(example_interface_1);
        // Expected writing text
        var expected_writing = fs_1.default.readFileSync(writing_path + "interface-1.txt", {
            encoding: "utf8",
        });
        // Asserting the result
        expect(gInterface.toString()).toEqual(JSON.stringify(JSON.parse(expected_model)[0]));
        // Asserting the writing result
        expect(gInterface.write()).toEqual(expected_writing);
        // Expecting compilation executes well
        gInterface.compile(function (err) {
            expect(err).toBe(undefined);
        });
    });
    it("Creating Gifflar Interface with inheritance", function () {
        var gInterface = gifflarInterfaceModel.execute("MyInterface");
        // Setting inheritance
        gInterface.setInheritance("InheritableInterface", ["'0x0c'"]);
        // Creating events
        gInterface.createEvent("transferedOwnership", [
            { name: "oldOwner", type: "address" },
            { name: "newOwner", type: "address" },
        ]);
        gInterface
            .createFunction("setOwner")
            .setInput({ regularType: "address" }, "newOwner")
            .setOutput({ regularType: "bool" });
        // Expected value
        var expected_model = JSON.stringify(example_interface_2);
        // Expected writing text
        var expected_writing = fs_1.default.readFileSync(writing_path + "interface-2.txt", {
            encoding: "utf8",
        });
        // Asserting the result
        expect(gInterface.toString()).toEqual(JSON.stringify(JSON.parse(expected_model)[0]));
        // Asserting the writing result
        expect(gInterface.write()).toEqual(expected_writing);
        // Expecting compilation executes well
        gInterface.compile(function (err) {
            expect(err[0].message).toBe("Identifier not found or not unique.");
        });
    });
});
