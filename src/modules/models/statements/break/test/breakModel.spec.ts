import { container } from "tsyringe";
import { IBreakModel } from "../types/IBreakModel";

describe("Break Model", () => {
  const breakModel = container.resolve<IBreakModel>("BreakModel");

  it("Creating Break Model", () => {
    const _break = breakModel.execute();
    const expected = {
      statement: "break",
    };
    expect(_break).toEqual(expected);
  });
});
