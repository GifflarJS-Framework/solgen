import { container } from "tsyringe";
import { IAssertModel } from "../types/IAssertModel";

describe("Assert Model", () => {
  const assertModel = container.resolve<IAssertModel>("AssertModel");

  it("Creating Assert Model", () => {
    const require = assertModel.execute({ condition: "a == b" });

    const expected = {
      statement: "assert",
      condition: "a == b",
    };

    expect(require).toEqual(expected);
  });
});
