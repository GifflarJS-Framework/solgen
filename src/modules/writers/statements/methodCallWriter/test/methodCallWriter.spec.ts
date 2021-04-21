import { IMethodCall } from "@models/methodcall/types/IMethodCall";
import createMethodCallWriter from "../implementations/default";

describe("Method Call Writer", () => {
  it("Writing Method Call", () => {
    const methodCallWriter = createMethodCallWriter();
    const inputs: IMethodCall = {
      statement: "method_call",
      variable: "person",
      method: "setAge",
      value: "20",
    };

    const expected = "person.setAge(20);";
    const result = methodCallWriter.write(inputs);

    expect(result).toMatch(expected);
  });
});
