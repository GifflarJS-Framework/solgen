import { IContents } from "@models/definitions/content/types/IContents";
import { container } from "tsyringe";
import { IContentWriter } from "../types/IContentWriter";

describe("Content Writer", () => {
  const contentWriter: IContentWriter = container.resolve("ContentWriter");

  it("Writing Content", () => {
    const contents: IContents[] = [
      {
        statement: "variable",
        type: "uint",
        name: "age",
        value: "20",
      },
      {
        statement: "if",
        condition: "age > 15",
        content: [
          {
            statement: "assignment",
            variable: "age",
            value: { statement: "expression", value: "30" },
          },
          {
            statement: "event_call",
            name: "ageUpdate",
            variables: ["age"],
          },
        ],
        else: false,
      },
    ];

    const expected =
      "uint age = 20;\nif(age > 15){\nage = 30;\nemit ageUpdate(age);\n}";
    const result = contentWriter.write(contents);

    expect(result).toMatch(expected);
  });
});
