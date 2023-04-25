import { container } from "tsyringe";
import { ICustomCode } from "../types/ICustomCode";
import { ICustomCodeModel } from "../types/ICustomCodeModel";

describe("CustomCode", () => {
  const customCodeModel =
    container.resolve<ICustomCodeModel>("CustomCodeModel");
  it("Creating CustomCode", () => {
    const expected: ICustomCode = {
      code: `string public message = "Hello World!";`,
    };
    const customCode = customCodeModel.execute({
      code: `string public message = "Hello World!";`,
    });

    expect(JSON.stringify(customCode)).toEqual(JSON.stringify(expected));
  });
});
