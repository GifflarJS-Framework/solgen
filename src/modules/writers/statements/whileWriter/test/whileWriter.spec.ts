import { IContents } from "@models/content/types/IContents";
import { IWhileModel } from "@models/while/types/IWhileModel";
import { container } from "tsyringe";
import { IWhileWriter } from "../types/IWhileWriter";

describe("WhileWriter", () => {
  const contentWriterMock = {
    write: (content: IContents[]): string => {
      return "emit myEvent(age);\n";
    },
  };

  const whileModel = container.resolve<IWhileModel>("WhileModel");
  const whileWriter = container.resolve<IWhileWriter>("WhileWriter");
  whileWriter._init(contentWriterMock);

  it("Writing", () => {
    const _while = whileModel.execute({ condition: "a == b" });
    const result = whileWriter.write(_while);
    const expected = `while(a == b){\nemit myEvent(age);\n}\n`;
    expect(result).toEqual(expected);
  });
});
