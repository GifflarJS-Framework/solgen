import { container } from "tsyringe";
import { IRevertModel } from "../types/IRevertModel";

describe("RevertModel", () => {
  const revertModel = container.resolve<IRevertModel>("RevertModel");

  it("Creating Revert Model", () => {
    const revert = revertModel.execute();
    const expected = {
      statement: "revert",
    };
    expect(revert).toEqual(expected);
  });

  it("Creating Revert Model with message", () => {
    const revert = revertModel.execute({
      message: "Not enough Ether provided.",
    });
    const expected = {
      statement: "revert",
      message: "Not enough Ether provided.",
    };
    expect(revert).toEqual(expected);
  });

  it("Creating Revert Model with eventCall", () => {
    const revert = revertModel.execute({
      customErrorCall: {
        customErrorName: "Unauthorized",
      },
    });
    const expected = {
      statement: "revert",
      customErrorCall: {
        customErrorName: "Unauthorized",
        args: [],
      },
    };
    expect(revert).toEqual(expected);
  });

  it("Creating Revert Model with eventCall and args", () => {
    const revert = revertModel.execute({
      customErrorCall: {
        customErrorName: "Unauthorized",
        args: ["from"],
      },
    });
    const expected = {
      statement: "revert",
      customErrorCall: {
        customErrorName: "Unauthorized",
        args: ["from"],
      },
    };
    expect(revert).toEqual(expected);
  });
});
