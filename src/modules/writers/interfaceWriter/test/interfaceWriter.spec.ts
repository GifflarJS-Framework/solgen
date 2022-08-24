import { IInterfaceModel } from "@models/interface/types/IInterfaceModel";
import { container } from "tsyringe";
import { IInterfaceWriter } from "../types/IInterfaceWriter";
import fs from "fs";
const writing_path = __dirname + "/../../../../test/examples/writing/";

describe("InterfaceWriter", () => {
  const interfaceModel = container.resolve<IInterfaceModel>("InterfaceModel");
  const interfaceWriter =
    container.resolve<IInterfaceWriter>("InterfaceWriter");

  it("Writing", () => {
    const _interface = interfaceModel.execute("MyInterface");

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
    const result = interfaceWriter.write([_interface]);
    const expected = fs.readFileSync(writing_path + "interface-1.txt", {
      encoding: "utf8",
    });
    expect(result).toEqual(expected);
  });

  it("Writing with inheritance", () => {
    const _interface = interfaceModel.execute("MyInterface");

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
    const result = interfaceWriter.write([_interface]);
    const expected = fs.readFileSync(writing_path + "interface-2.txt", {
      encoding: "utf8",
    });
    expect(result).toEqual(expected);
  });
});
