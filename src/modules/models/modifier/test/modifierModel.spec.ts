import { container } from "tsyringe";
import { IModifierModel } from "../types/IModifierModel";

describe("Modifier Model", () => {
  const modifierModel: IModifierModel = container.resolve("ModifierModel");

  it("Creating empty modifier", () => {
    // Creating modifier
    const myModifier = modifierModel.execute({
      title: "MyModifier",
      args: [],
    });

    // Expected object
    const expected = JSON.stringify({
      statement: "modifier",
      title: "MyModifier",
      args: [],
      content: [],
    });

    // Checking properties
    const result = myModifier.toString();
    expect(result).toEqual(expected);
  });

  it("Creating argumented modifier", () => {
    // Creating modifier
    const myModifier = modifierModel.execute({
      title: "MyModifier",
      args: [{ name: "price", type: "uint" }],
    });

    // Expected object
    const expected = JSON.stringify({
      statement: "modifier",
      title: "MyModifier",
      args: [{ name: "price", type: "uint" }],
      content: [],
    });

    // Checking properties
    const result = myModifier.toString();
    expect(result).toEqual(expected);
  });

  it("Creating contented modifier", () => {
    // Creating modifier
    const myModifier = modifierModel.execute({
      title: "MyModifier",
      args: [{ name: "price", type: "uint" }],
    });

    // Creating condition
    myModifier
      .beginIf("price > 10000")
      .setEventCall("PriceTooLow", ["price"])
      .endIf();

    // Expected object
    const expected = JSON.stringify({
      statement: "modifier",
      title: "MyModifier",
      args: [{ name: "price", type: "uint" }],
      content: [
        {
          statement: "if",
          else: false,
          condition: "price > 10000",
          content: [
            {
              statement: "event_call",
              name: "PriceTooLow",
              variables: ["price"],
            },
          ],
        },
      ],
    });

    // Checking properties
    const result = myModifier.toString();
    expect(result).toEqual(expected);
  });
});
