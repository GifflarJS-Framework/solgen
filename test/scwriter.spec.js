const createWriter = require("../src/modules/scwriter");
const assert = require("assert");
const helpers = require("../src/modules/utils/helpers");

const json = {
  name: "MyContract",
  contract: {
    variables: [
      {
        type: "string",
        scope: "public",
        name: "message",
        setMethod: true,
      },
      {
        type: "string[]",
        scope: "public",
        name: "messages",
        setMethod: true,
      },
    ],
    functions: [
      {
        name: "",
        isConstructor: true,
        inputs: [
          {
            name: "_message",
            type: "string",
          },
        ],
        content: [
          {
            statement: "assignment",
            variable: "message",
            value: "_message",
          },
          {
            statement: "assignment",
            variable: "messages",
            value: "[]",
          },
          {
            statement: "push",
            variable: "messages",
            value: "_message",
          },
          {
            statement: "assignment",
            variable: "message",
            value: {
              statement: "expression",
              value1: "val",
              operator: "++",
            },
          },
        ],
      },
      {
        name: "setMessage",
        isConstructor: false,
        inputs: [
          {
            name: "_message",
            type: "string",
          },
          {
            name: "_val",
            type: "uint",
          },
        ],
        outputs: [],
        content: [
          {
            statement: "assignment",
            variable: "message",
            value: "_message",
          },
          {
            statement: "if",
            else: false,
            condition: "_val == 1",
            content: [
              {
                statement: "callevent",
                name: "temperatureOverflow",
                inputs: [
                  {
                    name: "_message",
                    type: "string",
                  },
                  {
                    name: "_val",
                    type: "uint",
                  },
                ],
              },
              {
                statement: "callevent",
                name: "temperatureOverflow2",
                inputs: [
                  {
                    name: "_message",
                    type: "string",
                  },
                  {
                    name: "_val",
                    type: "uint",
                  },
                ],
              },
              {
                statement: "assignment",
                variable: "message",
                value: "_message",
              },
            ],
          },
        ],
      },
    ],
  },
};

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
