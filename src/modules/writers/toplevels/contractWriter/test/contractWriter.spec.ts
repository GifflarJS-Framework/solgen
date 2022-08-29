import fs from "fs";
import { container } from "tsyringe";
import { IContractWriter } from "../types/IContractWriter";
const exampleContractModel = require("@test/examples/modeling/contract-4");
const writing_path = __dirname + "/../../../../../test/examples/writing/";

describe("Contract Writer", () => {
  it("Writing Contract", () => {
    const contractWriter: IContractWriter = container.resolve("ContractWriter");

    const expected = fs.readFileSync(writing_path + "contract-4.txt", {
      encoding: "utf8",
    });

    const result = contractWriter.write(exampleContractModel, () => {});

    expect(result).toMatch(expected);
  });
});
