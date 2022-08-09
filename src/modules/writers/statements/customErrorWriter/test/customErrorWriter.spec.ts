import { ICustomErrorModel } from "@models/customError/types/ICustomErrorModel";
import { container } from "tsyringe";
import { ICustomErrorWriter } from "../types/ICustomErrorWriter";

describe("Custom Error Writer", () => {
  const customErrorModel =
    container.resolve<ICustomErrorModel>("CustomErrorModel");
  const customErrorWriter =
    container.resolve<ICustomErrorWriter>("CustomErrorWriter");

  it("Writing", () => {
    const customError = customErrorModel.execute({ name: "Unauthorized" });
    const result = customErrorWriter.write([customError]);
    const expected = `error Unauthorized();\n\n`;
    expect(result).toEqual(expected);
  });

  it("Writing with args", () => {
    const customError = customErrorModel.execute({
      name: "Unauthorized",
      args: [{ name: "from", type: "address" }],
    });
    const result = customErrorWriter.write([customError]);
    const expected = `error Unauthorized(address from);\n\n`;
    expect(result).toEqual(expected);
  });

  it("Writing with args", () => {
    const customError = customErrorModel.execute({
      name: "Unauthorized",
      args: [{ name: "from", type: "address" }],
    });
    const customError2 = customErrorModel.execute({
      name: "InsufficientBalance",
      args: [
        { name: "available", type: "uint256" },
        { name: "required", type: "uint256" },
      ],
    });
    const result = customErrorWriter.write([customError, customError2]);
    const expected = `error Unauthorized(address from);\nerror InsufficientBalance(uint256 available, uint256 required);\n\n`;
    expect(result).toEqual(expected);
  });
});
