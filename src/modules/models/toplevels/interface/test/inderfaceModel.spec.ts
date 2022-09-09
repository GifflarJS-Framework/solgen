import { container } from "tsyringe";
import { IInterfaceModel } from "../types/IInterfaceModel";
const example_interface_1 = require("@test/examples/modeling/interface-1.json");
const example_interface_2 = require("@test/examples/modeling/interface-2.json");

describe("InterfaceModel", () => {
  const interfaceModel = container.resolve<IInterfaceModel>("InterfaceModel");

  it("Creating Interface", () => {
    const _interface = interfaceModel.execute("MyInterface");

    // Creating events
    _interface.createEvent("transferedOwnership", [
      { name: "oldOwner", type: { regularType: "address" } },
      { name: "newOwner", type: { regularType: "address" } },
    ]);

    _interface
      .createFunction("setOwner", "external")
      .setInput({ regularType: "address" }, "newOwner")
      .setOutput({ regularType: "bool" });

    // Expected value
    const expected_model = JSON.stringify(example_interface_1);

    // Asserting the result
    expect(_interface.toString()).toEqual(
      JSON.stringify(JSON.parse(expected_model)[0])
    );
  });

  it("Creating Interface with inheritance", () => {
    const _interface = interfaceModel.execute("MyInterface");

    // Setting inheritance
    _interface.setInheritance("InheritableInterface", ["'0x0c'"]);

    // Creating events
    _interface.createEvent("transferedOwnership", [
      { name: "oldOwner", type: { regularType: "address" } },
      { name: "newOwner", type: { regularType: "address" } },
    ]);

    _interface
      .createFunction("setOwner", "external")
      .setInput({ regularType: "address" }, "newOwner")
      .setOutput({ regularType: "bool" });

    // Expected value
    const expected_model = JSON.stringify(example_interface_2);

    // Asserting the result
    expect(_interface.toString()).toEqual(
      JSON.stringify(JSON.parse(expected_model)[0])
    );
  });
});
