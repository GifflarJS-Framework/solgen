import { IRevertModel } from "@models/revert/types/IRevertModel";
import { container } from "tsyringe";
import { IRevertWriter } from "../types/IRevertWriter";

describe("Revert Writer", () => {
  const revertModel = container.resolve<IRevertModel>("RevertModel");
  const revertWriter = container.resolve<IRevertWriter>("RevertWriter");

  it("Writing", () => {
    const revert = revertModel.execute();
    const result = revertWriter.write(revert);
    const expected = `revert();`;
    expect(result).toEqual(expected);
  });

  it("Writing with message", () => {
    const revert = revertModel.execute({
      message: "Not enough Ether provided.",
    });
    const result = revertWriter.write(revert);
    const expected = `revert("Not enough Ether provided.");`;
    expect(result).toEqual(expected);
  });

  it("Writing with customErrorCall", () => {
    const revert = revertModel.execute({
      customErrorCall: {
        customErrorName: "Unauthorized",
      },
    });
    const result = revertWriter.write(revert);
    const expected = `revert Unauthorized();`;
    expect(result).toEqual(expected);
  });

  it("Writing with customErrorCall", () => {
    const revert = revertModel.execute({
      customErrorCall: {
        customErrorName: "Unauthorized",
        args: ["from"],
      },
    });
    const result = revertWriter.write(revert);
    const expected = `revert Unauthorized(from);`;
    expect(result).toEqual(expected);
  });
});
