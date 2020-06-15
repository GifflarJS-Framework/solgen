const createContractWriter = require("../../../../src/modules/writers/contractWriter");
const assert = require("assert");
const helpers = require("../../../../src/utils/helpers");
const json = require("../../../examples/modeling/contract-2.json");

describe("Test Contract Writer", () => {
  let writer = null;
  it("Object creation", () => {
    writer = createContractWriter();
    assert.ok(!helpers.isObjEmpty(writer), "Error while creating writer");
  });

  it("Writing Contract", () => {
    assert.ok(writer, "Writer not defined");
    const contract_text = writer.write([json]);
    //console.log(contract_text);
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
