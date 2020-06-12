const assert = require("assert");
const createIoTJsonParser = require("../../../src/modules/iot/jsonParser");

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
          {
            idv: "test",
            type: "bool",
            default: "",
          },
        ],
      },
    },
  ];

  it("Parsing", () => {
    const jsonParser = createIoTJsonParser();

    const manager = jsonParser.parse(sensors);
    console.log(JSON.stringify(manager.models));
    console.log(manager.write());

    assert.equal("", "");
  });
});
