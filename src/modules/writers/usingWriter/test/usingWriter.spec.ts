import { IUsingModel } from "@models/using/types/IUsingModel";
import { container } from "tsyringe";
import { IUsingWriter } from "../types/IUsingWriter";

describe("UsingWriter", () => {
  const usingModel = container.resolve<IUsingModel>("UsingModel");
  const usingWriter = container.resolve<IUsingWriter>("UsingWriter");

  it("Writing Using", () => {
    const using = usingModel.execute({ identifier: "MyLibrary", type: "uint" });
    const result = usingWriter.write([using]);
    const expected = `using MyLibrary for uint;\n\n`;
    expect(result).toEqual(expected);
  });

  it("Writing many Using", () => {
    const using = usingModel.execute({ identifier: "MyLibrary", type: "uint" });
    const using2 = usingModel.execute({
      identifier: "MyStringLibrary",
      type: "string",
    });
    const result = usingWriter.write([using, using2]);
    const expected = `using MyLibrary for uint;\nusing MyStringLibrary for string;\n\n`;
    expect(result).toEqual(expected);
  });
});
