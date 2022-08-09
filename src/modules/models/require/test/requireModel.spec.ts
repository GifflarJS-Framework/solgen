import { container } from "tsyringe";
import { IRequireModel } from "../types/IRequireModel";

describe("Require Model", () => {
  const requireModel = container.resolve<IRequireModel>("RequireModel");

  it("Creating Require Model", () => {
    const require = requireModel.execute({ condition: "a == b" });

    const expected = {
      statement: "require",
      condition: "a == b",
    };

    expect(require).toEqual(expected);
  });

  it("Creating Require Model with error message", () => {
    const require = requireModel.execute({
      condition: "a == b",
      errorMessage: "a must be equal to b",
    });

    const expected = {
      statement: "require",
      condition: "a == b",
      errorMessage: "a must be equal to b",
    };

    expect(require).toEqual(expected);
  });
});
