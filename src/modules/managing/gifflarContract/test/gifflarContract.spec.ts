import fs from "fs";
import { container } from "tsyringe";
import { IGifflarContract } from "../types/IGifflarContract";
import { IGifflarContractModel } from "../types/IGifflarContractModel";
const writing_path = __dirname + "/../../../../test/examples/writing/";
const expectedJson = JSON.stringify(
  require("@test/examples/modeling/contract-1.json")
);

describe("Gifflar Contract", () => {
  const contractModel: IGifflarContractModel = container.resolve(
    "GifflarContractModel"
  );

  it("Writing Gifflar Contract", () => {
    const gContract: IGifflarContract = contractModel.execute("MyContract");

    const expected = fs.readFileSync(writing_path + "contract-1.txt", {
      encoding: "utf8",
    });

    // Creating the variables
    gContract.createVariable({ regularType: "address" }, "manager", "public");
    gContract.createVariable({ regularType: "string" }, "name", "public");
    gContract.createVariable({ regularType: "uint256" }, "value1", "public");
    gContract.createVariable(
      { regularType: "uint256" },
      "max_value1",
      "public"
    );
    gContract.createVariable(
      { regularType: "uint256" },
      "min_value1",
      "public"
    );

    // Creating events
    gContract.createEvent("temperatureOverflow", [
      { name: "value1", type: { regularType: "uint256" } },
      { name: "max_value1", type: { regularType: "uint256" } },
    ]);
    gContract.createEvent("temperatureUnderflow", [
      { name: "value1", type: { regularType: "uint256" } },
      { name: "min_value1", type: { regularType: "uint256" } },
    ]);

    // Creating constructor
    gContract
      .createConstructor("public")
      .setInput({ regularType: "address" }, "_owner")
      .setAssignment("manager", { customExpression: "_owner" })
      .setAssignment("name", { customExpression: '"DHT11"' });

    // Creating a new function
    gContract
      .createFunction("setValue", "public")
      .setInput({ regularType: "uint256" }, "_val")
      .setInput({ regularType: "uint256" }, "_valueId")
      .beginIf("_valueId == 1")
      .setAssignment("value1", { customExpression: "_val" })
      .beginIf("value1 >= max_value1")
      .setEventCall("temperatureOverflow", ["value1", "max_value1"])
      .endIf()
      .beginElseIf("value1 <= min_value1")
      .setEventCall("temperatureUnderflow", ["value1", "min_value1"])
      .endElseIf()
      .endIf();

    gContract
      .createFunction("setName", "public")
      .setInput({ regularType: "string" }, "_name")
      .setAssignment("name", { customExpression: "_name" });

    const resultJson = gContract.toString();
    const result = gContract.write();

    // const deployed = gContract.compile((err) => {});
    // console.log(JSON.stringify(deployed));

    // Testing json
    expect(resultJson).toMatch(expectedJson);
    // Testing code
    expect(result).toMatch(expected);
  });
});
