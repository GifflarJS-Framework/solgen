import { IAssert } from "@models/statements/assert/types/IAssert";
import { container } from "tsyringe";
import { IAssertWriter } from "../types/IAssertWriter";

describe("Assert Writer", () => {
  const assertWriter = container.resolve<IAssertWriter>("AssertWriter");

  it("Writing", () => {
    const assert: IAssert = {
      statement: "assert",
      condition: "a == b",
    };

    const result = assertWriter.write(assert);
    const expected = `assert(a == b)`;

    expect(result).toEqual(expected);
  });
});
