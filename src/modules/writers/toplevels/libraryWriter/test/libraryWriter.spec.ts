import { ILibraryModel } from "@models/toplevels/library/types/ILibraryModel";
import { container } from "tsyringe";
import { ILibraryWriter } from "../types/ILibraryWriter";
import fs from "fs";
const writing_path = __dirname + "/../../../../../test/examples/writing/";

describe("LibraryWriter", () => {
  const libraryModel: ILibraryModel = container.resolve("LibraryModel");
  const libraryWriter: ILibraryWriter = container.resolve("LibraryWriter");

  it("Writing", () => {
    // MODELING
    const libraryModelInstance = libraryModel.execute("Ownable");

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

    // WRITING
    const result = libraryWriter.write([libraryModelInstance]);
    const expected = fs.readFileSync(writing_path + "library-1.txt", {
      encoding: "utf8",
    });
    expect(result).toEqual(expected);
  });
});
