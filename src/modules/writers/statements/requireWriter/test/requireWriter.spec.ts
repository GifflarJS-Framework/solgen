import { IRequire } from "@models/statements/require/types/IRequire";
import { container } from "tsyringe";
import { IRequireWriter } from "../types/IRequireWriter";

describe("Require Writer", () => {
  const requireWriter = container.resolve<IRequireWriter>("RequireWriter");

  it("Writing", () => {
    const require: IRequire = {
      statement: "require",
      condition: "a == b",
    };

    const result = requireWriter.write(require);
    const expected = `require(a == b)`;

    expect(result).toEqual(expected);
  });

  it("Writing with error message", () => {
    const require: IRequire = {
      statement: "require",
      condition: "a == b",
      errorMessage: "a must be equal to b.",
    };

    const result = requireWriter.write(require);
    const expected = `require(a == b, "a must be equal to b.")`;

    expect(result).toEqual(expected);
  });
});
