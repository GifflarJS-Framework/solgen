import { IContents } from "@models/content/types/IContents";
import { IDoWhileModel } from "@models/dowhile/types/IDoWhileModel";
import { container } from "tsyringe";
import { IDoWhileWriter } from "../types/IDoWhileWriter";

describe("DoWhileWriter", () => {
  const contentWriterMock = {
    write: (content: IContents[]): string => {
      return "emit myEvent(age);\n";
    },
  };

  const doWhileModel = container.resolve<IDoWhileModel>("DoWhileModel");
  const doWhileWriter = container.resolve<IDoWhileWriter>("DoWhileWriter");
  doWhileWriter._init(contentWriterMock);

  it("Writing", () => {
    const _doWhile = doWhileModel.execute({ condition: "a == b" });
    const result = doWhileWriter.write(_doWhile);
    const expected = `do {\nemit myEvent(age);\n} while(a == b)`;
    expect(result).toEqual(expected);
  });
});
