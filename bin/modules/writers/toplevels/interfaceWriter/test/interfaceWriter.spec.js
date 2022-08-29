"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var fs_1 = __importDefault(require("fs"));
var writing_path = __dirname + "/../../../../../test/examples/writing/";
describe("InterfaceWriter", function () {
    var interfaceModel = tsyringe_1.container.resolve("InterfaceModel");
    var interfaceWriter = tsyringe_1.container.resolve("InterfaceWriter");
    it("Writing", function () {
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
        // Writing
        var result = interfaceWriter.write([_interface]);
        var expected = fs_1.default.readFileSync(writing_path + "interface-1.txt", {
            encoding: "utf8",
        });
        expect(result).toEqual(expected);
    });
    it("Writing with inheritance", function () {
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
        // Writing
        var result = interfaceWriter.write([_interface]);
        var expected = fs_1.default.readFileSync(writing_path + "interface-2.txt", {
            encoding: "utf8",
        });
        expect(result).toEqual(expected);
    });
});
