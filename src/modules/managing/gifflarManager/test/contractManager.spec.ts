/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
import fs from "fs";
import solc from "solc";
import { container } from "tsyringe";
import { IGifflarManager } from "../types/IGifflarManager";

const writing_path = `${__dirname}/../../../../test/examples/writing/`;
const expectedJson = JSON.stringify(
  require("@test/examples/modeling/contract-5.json")
);
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());
let accounts: string[];
beforeAll(async () => {
  accounts = await web3.eth.getAccounts();
});

describe("Contract Manager Writer", () => {
  const gContractManager: IGifflarManager = container.resolve("GifflarManager");
  gContractManager.setWeb3(web3);

  it("Writing Gifflar Manager", () => {
    const gContract = gContractManager.newContract("DHT11");
    const gContractController = gContractManager.newContract("Controller");

    const expected = fs.readFileSync(`${writing_path}contract-5.txt`, {
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
      { name: "value1", type: "uint256" },
      { name: "max_value1", type: "uint256" },
    ]);
    gContract.createEvent("temperatureUnderflow", [
      { name: "value1", type: "uint256" },
      { name: "min_value1", type: "uint256" },
    ]);

    // Creating constructor
    gContract
      .createConstructor("public")
      .setInput({ regularType: "address" }, "_owner")
      .setAssignment("manager", "_owner")
      .setAssignment("name", '"DHT11"');

    // Creating a new function
    gContract
      .createFunction("setValue", "public")
      .setInput({ regularType: "uint256" }, "_val")
      .setInput({ regularType: "uint256" }, "_valueId")
      .beginIf("_valueId == 1")
      .setAssignment("value1", "_val")
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
      .setAssignment("name", "_name");

    // Modeling Variables
    gContractController.createVariable(
      { customType: "DHT11[]" },
      "contracts",
      "public"
    );
    gContractController.createVariable(
      { regularType: "uint256" },
      "counter",
      "private",
      "0"
    );

    // Modeling Functions
    gContractController
      .createFunction("createContract", "public")
      .setInput({ regularType: "address" }, "_owner")
      .setContractVariable("newContract", "DHT11", ["_owner"])
      .setMethodCall("contracts", "push", "newContract")
      .setAssignment("counter", "counter + 1");

    gContractController
      .createFunction("getLastContract", "public")
      .setOutput({ customType: "DHT11" })
      .setVariable({ customType: "DHT11" }, "_contract")
      .beginIf("counter > 0")
      .setAssignment("_contract", "contracts[counter - 1]")
      .endIf()
      .beginElse()
      .setAssignment("_contract", "contracts[0]")
      .endIf()
      .setReturn(["_contract"]);

    const resultJson = gContractManager.getAllDirectives().map((contract) => {
      return JSON.parse(contract.toString());
    });
    const result = gContractManager.writeAll();

    // const deployed = gContract.compile((err) => {});
    // console.log(JSON.stringify(deployed));

    // Testing json
    expect(JSON.stringify(resultJson)).toEqual(expectedJson);
    // Testing code
    expect(result).toEqual(expected);
  });

  // COMPILING
  it("Compiling", () => {
    const compiled = gContractManager.compileAll((errors: any) => {
      if (Array.isArray(errors)) {
        errors.map((e) => {
          // console.log(e.formattedMessage);
          return null;
        });
      }
    });

    const config = JSON.stringify({
      language: "Solidity",
      sources: {
        jsons: {
          content: gContractManager.written(),
        },
      },
      settings: {
        outputSelection: {
          // return everything
          "*": {
            "*": ["*"],
          },
        },
      },
    });

    const expected_json = solc.compile(config);
    const actual_json = JSON.stringify(compiled);

    expect(actual_json).toEqual(expected_json);
  });

  // DEPLOYING
  it("Deploying Controller", async () => {
    const instance = await gContractManager.deploy("Controller", {
      from: accounts[0],
      args: [],
      gas: 4000000,
    });
    expect(instance).toHaveProperty("options");
    expect(instance.options).toHaveProperty("address");
  });
});
