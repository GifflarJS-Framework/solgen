import { IMethodCall } from "@models/statements/methodcall/types/IMethodCall";
import { container } from "tsyringe";
import { IMethodCallWriter } from "../types/IMethodCallWriter";

describe("Method Call Writer", () => {
  it("Writing Method Call", () => {
    const methodCallWriter: IMethodCallWriter =
      container.resolve("MethodCallWriter");

    const inputs: IMethodCall = {
      statement: "method_call",
      variable: "person",
      method: "setAge",
      value: "20",
    };

    const expected = "person.setAge(20)";
    const result = methodCallWriter.write(inputs);

    expect(result).toMatch(expected);
  });
});
