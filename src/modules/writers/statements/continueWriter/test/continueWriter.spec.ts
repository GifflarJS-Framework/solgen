import ContinueModel from "@models/statements/continue/implementations/ContinueModel";
import { container } from "tsyringe";
import { IContinueWriter } from "../types/IContinueWriter";

describe("ContinueWriter", () => {
  const continueModel = container.resolve<ContinueModel>("ContinueModel");
  const continueWriter = container.resolve<IContinueWriter>("ContinueWriter");

  it("Writing", () => {
    const _continue = continueModel.execute();
    const result = continueWriter.write(_continue);
    const expected = `continue`;
    expect(result).toEqual(expected);
  });
});
