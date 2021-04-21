import fs from "fs";
import createContract from "../implementations/default";
const writing_path = __dirname + "/../../../../test/examples/writing/";
const expectedJson = JSON.stringify(
  require("@test/examples/modeling/contract-1.json")
);

describe("Contract Writer", () => {
  it("Writing Contract", () => {
    const gContract = createContract("MyContract");

    const expected = fs.readFileSync(writing_path + "contract-1.txt", {
      encoding: "utf8",
    });

    // Creating the variables
    gContract.createVariable("address", "manager", "public");
    gContract.createVariable("string", "name", "public", true);
    gContract.createVariable("uint256", "value1", "public");
    gContract.createVariable("uint256", "max_value1", "public");
    gContract.createVariable("uint256", "min_value1", "public");

    // Creating constructor
    gContract
      .createConstructor("public")
      .setInput("address", "_owner")
      .setAssignment("manager", "_owner")
      .setAssignment("name", '"DHT11"');

    // Creating a new function
    gContract
      .createFunction("setValue", "public")
      .setInput("uint256", "_val")
      .setInput("uint256", "_valueId")
      .beginIf("_valueId == 1")
      .setAssignment("value1", "_val")
      .beginIf("value1 >= max_value1")
      .setEventCall("temperatureOverflow", ["value1", "max_value1"])
      .endIf()
      .beginElseIf("value1 <= min_value1")
      .setEventCall("temperatureUnderflow", ["value1", "min_value1"])
      .endElseIf()
      .endIf();

    const resultJson = JSON.stringify(gContract);
    const result = gContract.write();

    // const deployed = gContract.compile((err) => {});
    // console.log(JSON.stringify(deployed));

    // Testing json
    expect(resultJson).toMatch(expectedJson);
    // Testing code
    expect(result).toMatch(expected);
  });
});
