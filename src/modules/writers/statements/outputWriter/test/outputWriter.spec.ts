import { IOutput } from "@models/function/types/IOutput";
import { container } from "tsyringe";
import { IOutputWriter } from "../types/IOutputWriter";

describe("Output Writer", () => {
  it("Writing Output", () => {
    const outputWriter: IOutputWriter = container.resolve("OutputWriter");
    const outputs: Array<IOutput> = [
      { type: "address", name: "output1" },
      { type: "uint256", name: "output2" },
    ];

    const result = outputWriter.write(outputs);
    const expected = "returns(address output1, uint256 output2)";

    expect(result).toEqual(expected);
  });

  it("Writing Output without name", () => {
    const outputWriter: IOutputWriter = container.resolve("OutputWriter");
    const outputs: Array<IOutput> = [
      { type: "address", name: "output1" },
      { type: "string" },
    ];

    const result = outputWriter.write(outputs);
    const expected = "returns(address output1, string memory)";

    expect(result).toEqual(expected);
  });
});
