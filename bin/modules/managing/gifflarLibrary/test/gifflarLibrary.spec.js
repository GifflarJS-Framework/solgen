"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var fs_1 = __importDefault(require("fs"));
var writing_path = __dirname + "/../../../../test/examples/writing/";
var example_library_1 = require("../../../../test/examples/modeling/library-1.json");
describe("GifflarLibrary", function () {
    var gifflarLibraryModel = tsyringe_1.container.resolve("GifflarLibraryModel");
    // Expected values
    it("Writing Gifflar Library", function () {
        var gLibrary = gifflarLibraryModel.execute("Ownable");
        // Expected model
        var expected_model = JSON.stringify(example_library_1);
        // Expected writing result
        var expected = fs_1.default.readFileSync(writing_path + "library-1.txt", {
            encoding: "utf8",
        });
        // Creating the variables
        gLibrary.createVariable({ regularType: "address" }, "owner", "public");
        // Creating events
        gLibrary.createEvent("transferedOwnership", [
            { name: "oldOwner", type: "address" },
            { name: "newOwner", type: "address" },
        ]);
        // Creating a new function
        gLibrary
            .createFunction("setOwner", "public")
            .setInput({ regularType: "address" }, "newOwner")
            .setVariable({ regularType: "address" }, "oldOwner", "owner")
            .setAssignment("owner", "newOwner")
            .setEventCall("transferedOwnership", ["oldOwner", "owner"]);
        // Asserting the result
        expect(gLibrary.toString()).toEqual(JSON.stringify(JSON.parse(expected_model)[0]));
        // Writing
        expect(gLibrary.write()).toEqual(expected);
        expect(gLibrary.written()).toEqual(expected);
    });
});
