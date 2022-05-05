import { IExpression } from "@models/expression/types/IExpression";
import { container } from "tsyringe";
import { IExpressionWriter } from "../types/IExpressionWriter";

describe("Expression Writer", () => {
  it("Writing Event Call", () => {
    const expressionWriter: IExpressionWriter =
      container.resolve("ExpressionWriter");
    const expression: IExpression = {
      statement: "expression",
      value: "!((val+1)+(val+1))",
    };

    const expected = "!((val+1)+(val+1))";
    const result = expressionWriter.write(expression);

    expect(result).toMatch(expected);
  });
});
