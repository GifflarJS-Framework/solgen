import { IModifierModel } from "@models/modifier/types/IModifierModel";
import { container } from "tsyringe";
import { IModifierWriter } from "../types/IModifierWriter";

describe("Modifier Writer", () => {
  const modifierModel: IModifierModel = container.resolve("ModifierModel");
  const modifierWriter: IModifierWriter = container.resolve("ModifierWriter");

  it("Writing contented modifier", () => {
    // Creating modifier
    const myModifier = modifierModel.execute({
      title: "MyModifier",
      args: [
        { name: "price", type: "uint" },
        { name: "arg2", type: "uint" },
      ],
    });

    // Creating condition
    myModifier
      .beginIf("price > 10000")
      .setEventCall("PriceTooLow", ["price"])
      .endIf();

    // Writing modifier
    const result = modifierWriter.write([myModifier]);

    //Expected text
    const expected =
      `modifier MyModifier(uint price, uint arg2){\n` +
      `if(price > 10000){\n` +
      `emit PriceTooLow(price);\n` +
      `}\n` +
      `_;\n` +
      `}\n\n`;

    expect(expected).toEqual(result);
  });

  it("Writing virtual contented modifier", () => {
    // Creating modifier
    const myModifier = modifierModel.execute({
      title: "MyModifier",
      args: [
        { name: "price", type: "uint" },
        { name: "arg2", type: "uint" },
      ],
      isVirtual: true,
    });

    // Creating condition
    myModifier
      .beginIf("price > 10000")
      .setEventCall("PriceTooLow", ["price"])
      .endIf();

    // Writing modifier
    const result = modifierWriter.write([myModifier]);

    //Expected text
    const expected =
      `modifier MyModifier(uint price, uint arg2) virtual{\n` +
      `if(price > 10000){\n` +
      `emit PriceTooLow(price);\n` +
      `}\n` +
      `_;\n` +
      `}\n\n`;

    expect(expected).toEqual(result);
  });

  it("Writing virtual overrided contented modifier", () => {
    // Creating modifier
    const myModifier = modifierModel.execute({
      title: "MyModifier",
      args: [
        { name: "price", type: "uint" },
        { name: "arg2", type: "uint" },
      ],
      isVirtual: true,
      isOverriding: true,
    });

    // Creating condition
    myModifier
      .beginIf("price > 10000")
      .setEventCall("PriceTooLow", ["price"])
      .endIf();

    // Writing modifier
    const result = modifierWriter.write([myModifier]);

    //Expected text
    const expected =
      `modifier MyModifier(uint price, uint arg2) virtual override{\n` +
      `if(price > 10000){\n` +
      `emit PriceTooLow(price);\n` +
      `}\n` +
      `_;\n` +
      `}\n\n`;

    expect(expected).toEqual(result);
  });
});
