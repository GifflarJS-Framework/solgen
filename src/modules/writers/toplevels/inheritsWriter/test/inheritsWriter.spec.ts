import { IInheritsModel } from "@models/toplevels/inherits/types/IInheritsModel";
import { container } from "tsyringe";
import { IInheritsWriter } from "../types/IInheritsWriter";

describe("InheritsWriter", () => {
  const inheritsModel = container.resolve<IInheritsModel>("InheritsModel");
  const inheritsWriter = container.resolve<IInheritsWriter>("InheritsWriter");

  it("Writing", () => {
    const inherits = inheritsModel.execute({
      identifier: "Ownable",
    });
    const result = inheritsWriter.write([inherits]);
    const expected = `is Ownable`;

    expect(result).toEqual(expected);
  });

  it("Writing with args", () => {
    const inherits = inheritsModel.execute({
      identifier: "Ownable",
      args: ["1", `"arg2"`],
    });
    const result = inheritsWriter.write([inherits]);
    const expected = `is Ownable(1, "arg2")`;

    expect(result).toEqual(expected);
  });

  it("Writing many", () => {
    const inherits = inheritsModel.execute({
      identifier: "Ownable",
      args: ["1", `"arg2"`],
    });
    const inherits2 = inheritsModel.execute({
      identifier: "Numbers",
      args: ["0x123", `0`],
    });
    const result = inheritsWriter.write([inherits, inherits2]);
    const expected = `is Ownable(1, "arg2"), Numbers(0x123, 0)`;

    expect(result).toEqual(expected);
  });
});
