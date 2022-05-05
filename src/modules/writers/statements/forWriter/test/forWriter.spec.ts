import { IFor } from "@models/for/types/IFor";
import { container } from "tsyringe";
import { IForWriter } from "../types/IForWriter";

describe("If Writer", () => {
  it("Writing If", () => {
    const forWriter: IForWriter = container.resolve("ForWriter");
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

    const expected = "for(uint i = 0;i < 100;i++){\n}\n";
    const result = forWriter.write(myfor);

    expect(result).toEqual(expected);
  });
});
