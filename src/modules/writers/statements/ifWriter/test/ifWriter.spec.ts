import { IContents } from "@models/content/types/IContents";
import { IIf } from "@models/if/types/IIf";
import { IRequest } from "@models/request/types/IRequest";
import createIfWriter from "../";

describe("If Writer", () => {
  const writeContentMock = (
    content: IContents[],
    callback: (request: IRequest) => void
  ) => {
    return "age = 20;\n";
  };
  it("Writing If", () => {
    const ifWriter = createIfWriter(writeContentMock);
    const myif: IIf = {
      statement: "if",
      condition: "2 > 1",
      content: [],
      else: false,
    };

    const expected = "if(2 > 1){\nage = 20;\n}";
    const result = ifWriter.write(myif);

    expect(result).toMatch(expected);
  });

  it("Writing Else", () => {
    const ifWriter = createIfWriter(writeContentMock);
    const myelse: IIf = {
      statement: "if",
      condition: "",
      content: [],
      else: true,
    };

    const expected = "else{\nage = 20;\n}";
    const result = ifWriter.write(myelse);

    expect(result).toMatch(expected);
  });
});
