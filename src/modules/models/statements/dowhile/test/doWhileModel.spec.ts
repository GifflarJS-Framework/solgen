import { container } from "tsyringe";
import { IDoWhileModel } from "../types/IDoWhileModel";

describe("DoWhileModel", () => {
  const doWhileModel = container.resolve<IDoWhileModel>("DoWhileModel");

  it("Creating Do/While Model", () => {
    const _doWhile = doWhileModel.execute({ condition: "a == b" });
    const expected = {
      statement: "do_while",
      condition: "a == b",
      content: [],
    };
    expect(_doWhile).toEqual(expected);
  });
});
