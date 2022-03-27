import createIfModel from "../implementations/default";
import { IIf } from "../types/IIf";

describe("IF Model", () => {
  it("Creating", () => {
    const expected: IIf = {
      statement: "if",
      else: false,
      condition: "1 > 2",
      content: [],
    };
    const ifModel = createIfModel({ condition: "1 > 2", onElse: false });

    const result = JSON.stringify(ifModel);

    expect(result).toEqual(JSON.stringify(expected));
  });
});
