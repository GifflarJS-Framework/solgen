const assert = require("assert");
const createIoTJsonParser = require("../../../src/modules/iot/json_parser");

describe.only("IoT Json Parser", () => {
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

  it("Parsing", () => {
    const jsonParser = createIoTJsonParser();

    jsonParser.parse(sensors);

    assert.equal("", "");
  });
});
