import { IContents } from "@models/definitions/content/types/IContents";
import { ITryModel } from "@models/statements/try/types/ITryModel";
import { container } from "tsyringe";
import { ITryWriter } from "../types/ITryWriter";

describe("TryWriter", () => {
  const contentWriterMock = {
    write: (content: IContents[]): string => {
      return "";
    },
  };

  const tryModel = container.resolve<ITryModel>("TryModel");
  const tryWriter = container.resolve<ITryWriter>("TryWriter");
  tryWriter._init(contentWriterMock);

  it("Writing", () => {
    const _try = tryModel.execute({
      expression: {
        methodCall: {
          variable: "MyContract",
          method: "add",
          args: ["value"],
        },
      },
      parameters: [{ type: "uint256", name: "arg" }],
    });
    const result = tryWriter.write(_try);
    const expected = `try MyContract.add(value) returns(uint256 arg){\n}`;

    expect(result).toEqual(expected);
  });
});
