import { container } from "tsyringe";
import { IWhileModel } from "../types/IWhileModel";

describe("WhileModel", () => {
  const whileModel = container.resolve<IWhileModel>("WhileModel");

  it("Creating While Model", () => {
    const _while = whileModel.execute({ condition: "a == b" });
    const expected = {
      statement: "while",
      condition: "a == b",
      content: [],
    };
    expect(_while).toEqual(expected);
  });
});
