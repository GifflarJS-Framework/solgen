import { IContents } from "@models/content/types/IContents";
import createContentWriter from "../implementations/default";

describe("Content Writer", () => {
  it("Writing Content", () => {
    const contentWriter = createContentWriter();
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
            inputs: [{ type: "uint", name: "age" }],
          },
        ],
        else: false,
      },
    ];

    const expected =
      "uint age = 20;\nif(age > 15){\nage = 30;\nemit ageUpdate(age);\n}";
    const result = contentWriter.write(contents, (request) => {
      // console.log(request);

      expect(request).toHaveProperty("functions", []);
      expect(request).toHaveProperty("events", [
        {
          statement: "event_call",
          name: "ageUpdate",
          inputs: [{ name: "age", type: "uint" }],
        },
      ]);
      expect(request).toHaveProperty("text_returns", "");
    });

    expect(result).toMatch(expected);
  });
});
