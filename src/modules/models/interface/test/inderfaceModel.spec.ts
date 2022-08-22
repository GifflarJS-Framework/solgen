import { container } from "tsyringe";
import { IInterfaceModel } from "../types/IInterfaceModel";
const example_interface_1 = require("@test/examples/modeling/interface-1.json");

describe("InterfaceModel", () => {
  const interfaceModel = container.resolve<IInterfaceModel>("InterfaceModel");

  it("Creating Interface", () => {
    const _interface = interfaceModel.execute("MyInterface");

    // Creating events
    _interface.createEvent("transferedOwnership", [
      { name: "oldOwner", type: "address" },
      { name: "newOwner", type: "address" },
    ]);

    _interface
      .createFunction("setOwner")
      .setInput("address", "newOwner")
      .setOutput("boolean");

    // Expected value
    const expected_model = JSON.stringify(example_interface_1);

    // Asserting the result
    expect(_interface.toString()).toEqual(
      JSON.stringify(JSON.parse(expected_model)[0])
    );
  });
});
