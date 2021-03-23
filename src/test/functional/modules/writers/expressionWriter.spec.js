const assert = require("assert");
const createExpressionWriter = require("../../../../modules/writers/statements/expressionWriter");

const json = {
  statement: "expression",
  value: "!((val+1)+(val+1))",
};

describe("Expression Writer", () => {
  const expressionWriter = createExpressionWriter();
  it("Writing Expression", () => {
    const expected = "!((val+1)+(val+1))";
    const result = expressionWriter.write(json);
    assert.equal(result, expected);
  });
});
