import { container } from "tsyringe";
import { IInheritsModel } from "../types/IInheritsModel";

describe("InheritsModel", () => {
  const inheritsModel = container.resolve<IInheritsModel>("InheritsModel");

  it("Creating Inherts", () => {
    const inherits = inheritsModel.execute({ identifier: "Ownable" });
    const expected = { identifier: "Ownable" };
    expect(JSON.stringify(inherits)).toEqual(JSON.stringify(expected));
  });

  it("Creating Inherts with args", () => {
    const inherits = inheritsModel.execute({
      identifier: "Ownable",
      args: ["1", "arg2"],
    });
    const expected = { identifier: "Ownable", args: ["1", "arg2"] };
    expect(JSON.stringify(inherits)).toEqual(JSON.stringify(expected));
  });
});
