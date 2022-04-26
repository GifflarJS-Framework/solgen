import { IVariable } from "@models/variable/types/IVariable";
import createOutputWriter from "../implementations/default";

describe("Output Writer", () => {
  it("Writing Output", () => {
    const variables: Array<IVariable> = [
      { type: "uint256", name: "output1" },
      { type: "string", name: "output2" },
    ];
    const outputWriter = createOutputWriter(variables);
    const outputs: Array<string> = ["output1", "output2"];

    const expected = "return (output1, output2);";
    const expectedReturns = "returns (uint256, string)";
    const result = outputWriter.write(outputs, (object) => {
      expect(object.text_returns).toMatch(expectedReturns);
    });

    expect(result).toMatch(expected);
  });
});
