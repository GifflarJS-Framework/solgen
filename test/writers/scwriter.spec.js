const createWriter = require("../../src/modules/scwriter");
const assert = require("assert");
const helpers = require("../../src/modules/utils/helpers");
const json = require("../examples/contract-2.json");

describe("Test smcwriter", () => {
  let writer = null;
  it("Object creation", () => {
    writer = createWriter();
    assert.ok(!helpers.isObjEmpty(writer), "Error while creating writer");
  });

  it("writer.write()", () => {
    assert.ok(writer, "Writer not defined");
    const contract_text = writer.write(json);
    console.log(contract_text);
    assert.ok(contract_text, "No contract wrote");
  });
});

// ABI EXAMPLE
[
  {
    constant: false,
    inputs: [
      {
        name: "newMessage",
        type: "string",
      },
    ],
    name: "setMessage",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "message",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "initialMessage",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];
