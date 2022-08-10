import { IBreakModel } from "@models/break/types/IBreakModel";
import { container } from "tsyringe";
import { IBreakWriter } from "../types/IBreakWriter";

describe("BreakWriter", () => {
  const breakModel = container.resolve<IBreakModel>("BreakModel");
  const breakWriter = container.resolve<IBreakWriter>("BreakWriter");

  it("Writing", () => {
    const _break = breakModel.execute();
    const result = breakWriter.write(_break);
    const expected = `break`;
    expect(result).toEqual(expected);
  });
});
