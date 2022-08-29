"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var fs_1 = __importDefault(require("fs"));
var writing_path = __dirname + "/../../../../../test/examples/writing/";
describe("LibraryWriter", function () {
    var libraryModel = tsyringe_1.container.resolve("LibraryModel");
    var libraryWriter = tsyringe_1.container.resolve("LibraryWriter");
    it("Writing", function () {
        // MODELING
        var libraryModelInstance = libraryModel.execute("Ownable");
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
        // WRITING
        var result = libraryWriter.write([libraryModelInstance]);
        var expected = fs_1.default.readFileSync(writing_path + "library-1.txt", {
            encoding: "utf8",
        });
        expect(result).toEqual(expected);
    });
});
