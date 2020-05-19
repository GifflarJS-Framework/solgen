const createExpressionWriter = require("../../src/modules/writers/statements/expressionWriter");
const assert = require("assert");

const json = {
  statement: "expression",
  operator: "!",
  value1: {
    statement: "expression",
    value1: {
      statement: "expression",
      value1: "val",
      operator: "+",
      value2: "1",
    },
    operator: "+",
    value2: {
      statement: "expression",
      value1: "val",
      operator: "+",
      value2: "1",
    },
  },
  before: true,
};

describe("Expression Writer", () => {
  const expressionWriter = createExpressionWriter();
  it("Writing Expression", () => {
    const expected = "!((val+1)+(val+1))";
    const result = expressionWriter.write(json);
    assert.equal(result, expected);
  });
});
