import { IInput } from "@models/function/types/IInput";
import createInputWriter from "../implementations/default";

describe("Input Writer", () => {
  it("Writing Input", () => {
    const inputWriter = createInputWriter();
    const inputs: IInput[] = [
      {
        type: "uint",
        name: "age",
      },
      {
        type: "string",
        name: "name",
      },
    ];

    const expected = "uint age, string memory name";
    const result = inputWriter.write(inputs);

    const expectedNoType = "age, name";
    const resultNoType = inputWriter.write(inputs, false);

    expect(result).toMatch(expected);
    expect(resultNoType).toMatch(expectedNoType);
  });
});
