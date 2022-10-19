import { ICustomCodeModel } from "@modules/models/custom/customCode/types/ICustomCodeModel";
import { container } from "tsyringe";
import { ICustomCodeWriter } from "../types/ICustomCodeWriter";

describe("CustomCodeWrite", () => {
  const customCodeModel =
    container.resolve<ICustomCodeModel>("CustomCodeModel");
  const customCodeWriter =
    container.resolve<ICustomCodeWriter>("CustomCodeWriter");

  it("Writing custom code", () => {
    const customCode = customCodeModel.execute({
      code: `string public message = "Hello World!";`,
    });
    const result = customCodeWriter.write([customCode]);
    const expected = `string public message = "Hello World!";\n`;

    expect(result).toEqual(expected);
  });
});
