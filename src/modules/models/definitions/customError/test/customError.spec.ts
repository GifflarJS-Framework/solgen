import { container } from "tsyringe";
import { ICustomErrorModel } from "../types/ICustomErrorModel";

describe("CustomError", () => {
  const customErrorModel =
    container.resolve<ICustomErrorModel>("CustomErrorModel");

  it("Creating Custom Error", () => {
    const customError = customErrorModel.execute({
      name: "Unauthorized",
    });

    const expected = {
      name: "Unauthorized",
      args: [],
    };

    expect(customError).toEqual(expected);
  });

  it("Creating Custom Error with args", () => {
    const customError = customErrorModel.execute({
      name: "Unauthorized",
      args: [{ name: "from", type: "address" }],
    });

    const expected = {
      name: "Unauthorized",
      args: [{ name: "from", type: "address" }],
    };

    expect(customError).toEqual(expected);
  });
});
