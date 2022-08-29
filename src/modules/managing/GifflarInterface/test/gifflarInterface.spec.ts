import { container } from "tsyringe";
import { IGifflarInterfaceModel } from "../types/IGifflarInterfaceModel";
import fs from "fs";
const example_interface_1 = require("@test/examples/modeling/interface-1.json");
const example_interface_2 = require("@test/examples/modeling/interface-2.json");
const writing_path = __dirname + "/../../../../test/examples/writing/";

describe("GifflarInterface", () => {
  const gifflarInterfaceModel = container.resolve<IGifflarInterfaceModel>(
    "GifflarInterfaceModel"
  );

  it("Writing Gifflar Interface", () => {
    const gInterface = gifflarInterfaceModel.execute("MyInterface");

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
    const expected_model = JSON.stringify(example_interface_1);

    // Expected writing text
    const expected_writing = fs.readFileSync(writing_path + "interface-1.txt", {
      encoding: "utf8",
    });

    // Asserting the result
    expect(gInterface.toString()).toEqual(
      JSON.stringify(JSON.parse(expected_model)[0])
    );

    // Asserting the writing result
    expect(gInterface.write()).toEqual(expected_writing);

    // Expecting compilation executes well
    gInterface.compile((err) => {
      expect(err).toBe(undefined);
    });
  });

  it("Creating Gifflar Interface with inheritance", () => {
    const gInterface = gifflarInterfaceModel.execute("MyInterface");

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
    const expected_model = JSON.stringify(example_interface_2);

    // Expected writing text
    const expected_writing = fs.readFileSync(writing_path + "interface-2.txt", {
      encoding: "utf8",
    });

    // Asserting the result
    expect(gInterface.toString()).toEqual(
      JSON.stringify(JSON.parse(expected_model)[0])
    );

    // Asserting the writing result
    expect(gInterface.write()).toEqual(expected_writing);

    // Expecting compilation executes well
    gInterface.compile((err) => {
      expect(err[0].message).toBe("Identifier not found or not unique.");
    });
  });
});
