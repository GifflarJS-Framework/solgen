import { IContents } from "@models/content/types/IContents";
import { IFor } from "@models/for/types/IFor";
import { IRequest } from "@models/request/types/IRequest";
import createForWriter from "../implementations/default";

describe("If Writer", () => {
  const writeContentMock = (
    content: IContents[],
    callback: (request: IRequest) => void
  ) => {
    return "emit myEvent(age);\n";
  };
  it("Writing If", () => {
    const forWriter = createForWriter(writeContentMock);
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
