/* eslint-disable @typescript-eslint/no-var-requires */
import { container } from "tsyringe";
import fs from "fs";
import { IGifflarLibraryModel } from "../types/IGifflarLibraryModel";

const writing_path = `${__dirname}/../../../../test/examples/writing/`;

const example_library_1 = require("@test/examples/modeling/library-1.json");

describe("GifflarLibrary", () => {
  const gifflarLibraryModel = container.resolve<IGifflarLibraryModel>(
    "GifflarLibraryModel"
  );

  // Expected values

  it("Writing Gifflar Library", () => {
    const gLibrary = gifflarLibraryModel.execute("Ownable");
    // Expected model
    const expected_model = JSON.stringify(example_library_1);
    // Expected writing result
    const expected = fs.readFileSync(`${writing_path}library-1.txt`, {
      encoding: "utf8",
    });

    // Creating the variables
    gLibrary.createVariable({ regularType: "address" }, "owner", "public");

    // Creating events
    gLibrary.createEvent("transferedOwnership", [
      { name: "oldOwner", type: { regularType: "address" } },
      { name: "newOwner", type: { regularType: "address" } },
    ]);

    // Creating a new function
    gLibrary
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
    expect(gLibrary.toString()).toEqual(
      JSON.stringify(JSON.parse(expected_model)[0])
    );

    // Writing
    expect(gLibrary.write()).toEqual(expected);
    expect(gLibrary.written()).toEqual(expected);
  });
});
