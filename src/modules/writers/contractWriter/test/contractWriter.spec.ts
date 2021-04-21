import createContractWriter from "../";
import fs from "fs";
const exampleContractModel = require("@test/examples/modeling/contract-4");
const writing_path = __dirname + "/../../../../test/examples/writing/";

describe("Contract Writer", () => {
  it("Writing Contract", () => {
    const contractWriter = createContractWriter();

    const expected = fs.readFileSync(writing_path + "contract-4.txt", {
      encoding: "utf8",
    });

    const result = contractWriter.write(exampleContractModel, (request) => {
      // console.log(request);
    });

    expect(result).toMatch(expected);
  });
});
