"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __importDefault(require("../../../../../utils/helpers"));
var assert_1 = __importDefault(require("assert"));
var tsyringe_1 = require("tsyringe");
var example_library_1 = require("../../../../../test/examples/modeling/library-1.json");
describe("Test Library", function () {
    var libraryModel = tsyringe_1.container.resolve("LibraryModel");
    // Expected values
    var expected_model = JSON.stringify(example_library_1);
    // Actual values
    var libraryModelInstance;
    it("Object creation", function () {
        // Creating library
        libraryModelInstance = libraryModel.execute("Ownable");
        assert_1.default.ok(!helpers_1.default.isObjEmpty(libraryModelInstance), "Error while creating libraryModelInstance");
    });
    // MODELING
    it("Modeling Library", function () {
        // Creating the variables
        libraryModelInstance.createVariable({ regularType: "address" }, "owner", "public");
        // Creating events
        libraryModelInstance.createEvent("transferedOwnership", [
            { name: "oldOwner", type: "address" },
            { name: "newOwner", type: "address" },
        ]);
        // Creating a new function
        libraryModelInstance
            .createFunction("setOwner", "public")
            .setInput({ regularType: "address" }, "newOwner")
            .setVariable({ regularType: "address" }, "oldOwner", "owner")
            .setAssignment("owner", "newOwner")
            .setEventCall("transferedOwnership", ["oldOwner", "owner"]);
        // Asserting the result
        expect(libraryModelInstance.toString()).toEqual(JSON.stringify(JSON.parse(expected_model)[0]));
    });
});
