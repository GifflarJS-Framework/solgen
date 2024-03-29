import helpers from "@utils/helpers";
import assert from "assert";
import { container } from "tsyringe";
import { ILibrary } from "../types/ILibrary";
import { ILibraryModel } from "../types/ILibraryModel";
const example_library_1 = require("@test/examples/modeling/library-1.json");

describe("Test Library", () => {
  const libraryModel: ILibraryModel = container.resolve("LibraryModel");

  // Expected values
  const expected_model = JSON.stringify(example_library_1);

  // Actual values
  let libraryModelInstance: ILibrary;

  it("Object creation", () => {
    // Creating library
    libraryModelInstance = libraryModel.execute("Ownable");
    assert.ok(
      !helpers.isObjEmpty(libraryModelInstance),
      "Error while creating libraryModelInstance"
    );
  });

  // MODELING
  it("Modeling Library", () => {
    // Creating the variables
    libraryModelInstance.createVariable(
      { regularType: "address" },
      "owner",
      "public"
    );

    // Creating events
    libraryModelInstance.createEvent("transferedOwnership", [
      { name: "oldOwner", type: { regularType: "address" } },
      { name: "newOwner", type: { regularType: "address" } },
    ]);

    // Creating a new function
    libraryModelInstance
      .createFunction("setOwner", "public")
      .setInput({ regularType: "address" }, "newOwner")
      .setVariable({ regularType: "address" }, "oldOwner", {
        expressionValue: {
          customExpression: "owner",
        },
      })
      .setAssignment("owner", { customExpression: "newOwner" })
      .setEventCall("transferedOwnership", ["oldOwner", "owner"]);

    // Asserting the result
    expect(libraryModelInstance.toString()).toEqual(
      JSON.stringify(JSON.parse(expected_model)[0])
    );
  });
});
