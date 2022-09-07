import { IContents } from "@models/definitions/content/types/IContents";
import { IFor } from "@models/statements/for/types/IFor";
import { container } from "tsyringe";
import { IForWriter } from "../types/IForWriter";

describe("For Writer", () => {
  const contentWriterMock = {
    write: (content: IContents[]): string => {
      return "emit myEvent(age);\n";
    },
  };

  it("Writing For", () => {
    const forWriter: IForWriter = container.resolve("ForWriter");
    forWriter._init(contentWriterMock);

    const myfor: IFor = {
      statement: "for",
      variable: {
        statement: "variable",
        type: "uint",
        name: "i",
        expressionValue: {
          customExpression: "0",
        },
      },
      condition: "i < 100",
      expressionValue: {
        customExpression: "i++",
      },
      content: [],
    };

    const expected = "for(uint i = 0;i < 100;i++){\nemit myEvent(age);\n}\n";
    const result = forWriter.write(myfor);

    expect(result).toEqual(expected);
  });

  it("Writing For without variable", () => {
    const forWriter: IForWriter = container.resolve("ForWriter");
    forWriter._init(contentWriterMock);

    const myfor: IFor = {
      statement: "for",
      condition: "i < 100",
      expressionValue: {
        customExpression: "i++",
      },
      content: [],
    };

    const expected = "for(;i < 100;i++){\nemit myEvent(age);\n}\n";
    const result = forWriter.write(myfor);

    expect(result).toEqual(expected);
  });

  it("Writing For without condition", () => {
    const forWriter: IForWriter = container.resolve("ForWriter");
    forWriter._init(contentWriterMock);

    const myfor: IFor = {
      statement: "for",
      variable: {
        statement: "variable",
        type: "uint",
        name: "i",
        expressionValue: {
          customExpression: "0",
        },
      },
      expressionValue: {
        customExpression: "i++",
      },
      content: [],
    };

    const expected = "for(uint i = 0;;i++){\nemit myEvent(age);\n}\n";
    const result = forWriter.write(myfor);

    expect(result).toEqual(expected);
  });

  it("Writing For without expression", () => {
    const forWriter: IForWriter = container.resolve("ForWriter");
    forWriter._init(contentWriterMock);

    const myfor: IFor = {
      statement: "for",
      variable: {
        statement: "variable",
        type: "uint",
        name: "i",
        expressionValue: {
          customExpression: "0",
        },
      },
      condition: "i < 100",
      content: [],
    };

    const expected = "for(uint i = 0;i < 100;){\nemit myEvent(age);\n}\n";
    const result = forWriter.write(myfor);

    expect(result).toEqual(expected);
  });

  it("Writing For without any parameter", () => {
    const forWriter: IForWriter = container.resolve("ForWriter");
    forWriter._init(contentWriterMock);

    const myfor: IFor = {
      statement: "for",
      content: [],
    };

    const expected = "for(;;){\nemit myEvent(age);\n}\n";
    const result = forWriter.write(myfor);

    expect(result).toEqual(expected);
  });
});
