import { container } from "tsyringe";
import { IContinueModel } from "../types/IContinueModel";

describe("Continue Model", () => {
  const continueModel = container.resolve<IContinueModel>("ContinueModel");

  it("Creating Continue Model", () => {
    const _continue = continueModel.execute();
    const expected = {
      statement: "continue",
    };
    expect(_continue).toEqual(expected);
  });
});
