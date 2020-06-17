require("module-alias/register");
const fs = require("fs");
const assert = require("assert");
const createIoTJsonParser = require("@iot/jsonParser");
const expectedModeling = JSON.stringify(
  require("@examples/modeling/contract-6.json")
);
const writing_path = __dirname + "/../../../examples/writing/";
const expectedCode = fs.readFileSync(writing_path + "contract-6.txt", {
  encoding: "utf8",
});

describe("IoT Json Parser", () => {
  //Entry example
  const sensors = [
    {
      data: {
        name: "DHT11",
        values: [
          {
            idv: "temperature",
            type: "uint",
            default: "",
            max: "10",
            min: "0",
          },
          {
            idv: "humidity",
            type: "uint",
            default: "",
            max: "10",
            min: "0",
          },
        ],
      },
    },
  ];

  let manager = null;
  let jsonParser = null;

  it("jsonParser creation shouldn't throw error", () => {
    assert.doesNotThrow(() => {
      jsonParser = createIoTJsonParser();
    }, "jsonParser creation shouldn't throw error.");
  });

  describe("#parse()", () => {
    it("parsing JSON shouldn't throw error", () => {
      assert.doesNotThrow(() => {
        jsonParser.parse(sensors);
      }, "JSON parsing shouldn't throw error.");
    });
  });

  it("should match with the expected JSON", () => {
    manager = jsonParser.parse(sensors);
    const actualModeling = JSON.stringify(manager.models);
    assert.equal(actualModeling, expectedModeling);
  });

  it("should match with the expected code", () => {
    const actualCode = manager.write();
    assert.equal(actualCode, expectedCode);
  });
});
