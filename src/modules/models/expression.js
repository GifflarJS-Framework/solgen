function createExpressionModel(_expression) {
  const expression = {
    statement: "expression",
    value: _expression,
  };

  return expression;
}

module.exports = createExpressionModel;
