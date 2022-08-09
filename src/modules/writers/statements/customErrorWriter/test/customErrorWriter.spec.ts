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
    const result = customErrorWriter.write(customError);
    const expected = `error Unauthorized();`;
    expect(result).toEqual(expected);
  });

  it("Writing with args", () => {
    const customError = customErrorModel.execute({
      name: "Unauthorized",
      args: [{ name: "from", type: "address" }],
    });
    const result = customErrorWriter.write(customError);
    const expected = `error Unauthorized(address from);`;
    expect(result).toEqual(expected);
  });
});
