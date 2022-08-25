import { container } from "tsyringe";
import { IReturnModel } from "../types/IReturnModel";

describe("ReturnModel", () => {
  const returnModel = container.resolve<IReturnModel>("ReturnModel");

  it("Creating Return", () => {
    const _return = returnModel.execute({
      expressions: ["MyVariable", "MyVariable2"],
    });

    const expected = {
      statement: "return",
      expressions: ["MyVariable", "MyVariable2"],
    };

    expect(JSON.stringify(_return)).toEqual(JSON.stringify(expected));
  });
});
