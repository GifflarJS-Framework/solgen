function createExpressionWriter() {
  let text = "";
  function write(json_expression) {
    if (json_expression.before) {
      text += json_expression.operator;
    }

    let value = json_expression.value1;
    if (typeof value != "object") {
      text += value;
    } else {
      text += "(";
      write(value);
      text += ")";
    }

    if (!json_expression.before) {
      text += json_expression.operator;
    }

    value = json_expression.value2;
    if (value) {
      if (typeof value != "object") {
        text += value;
      } else {
        text += "(";
        write(value);
        text += ")";
      }
    }

    return text;
  }
  return {
    write,
  };
}

module.exports = createExpressionWriter;
