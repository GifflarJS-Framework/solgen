import { IContents } from "@models/content/types/IContents";
import { IFor } from "@models/for/types/IFor";
import { container } from "tsyringe";
import { IForWriter } from "../types/IForWriter";

describe("For Writer", () => {
  const contentWriterMock = {
    write: (content: IContents[]): string => {
      return "emit myEvent(age);\n";
    },
  };

  it("Writing If", () => {
    const forWriter: IForWriter = container.resolve("ForWriter");
    forWriter._init(contentWriterMock);

    const myfor: IFor = {
      statement: "for",
      assignment: {
        statement: "assignment",
        variable: "i",
        value: {
          statement: "expression",
          value: "0",
        },
      },
      condition: "i < 100",
      expression: {
        statement: "expression",
        value: "i++",
      },
      content: [],
    };

    const expected = "for(uint i = 0;i < 100;i++){\nemit myEvent(age);\n}\n";
    const result = forWriter.write(myfor);

    expect(result).toEqual(expected);
  });
});
