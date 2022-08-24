import { container } from "tsyringe";
import { IUsingModel } from "../types/IUsingModel";

describe("UsingModel", () => {
  const usingModel = container.resolve<IUsingModel>("UsingModel");

  it("Creating Using", () => {
    const using = usingModel.execute({ identifier: "MyLibrary", type: "uint" });

    const expected = {
      identifier: "MyLibrary",
      type: "uint",
    };

    expect(JSON.stringify(using)).toEqual(JSON.stringify(expected));
  });
});
