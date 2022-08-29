import { container } from "tsyringe";
import { IIf } from "../types/IIf";
import { IIfModel } from "../types/IIfModel";

describe("IF Model", () => {
  const ifModel: IIfModel = container.resolve("IfModel");

  it("Creating", () => {
    const expected: IIf = {
      statement: "if",
      else: false,
      condition: "1 > 2",
      content: [],
    };
    const _ifModel = ifModel.execute({ condition: "1 > 2", onElse: false });

    const result = JSON.stringify(_ifModel);

    expect(result).toEqual(JSON.stringify(expected));
  });
});
