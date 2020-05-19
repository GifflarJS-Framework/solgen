const { isObject } = require("../../utils/helpers");

function createExpressionWriter() {
  let text = "";

  /**
   * @name write
   * @description Writes an expression statement in Solidity code.
   * @param {Object} json The expression statement in json format.
   * @returns {string} The expression statement in Solidity code as string.
   * @example
   * Input
   * {
   *     statement: "expression",
   *     operator: "!",
   *     value1: {
   *         statement: "expression",
   *         value1: {
   *           statement: "expression",
   *           value1: "val",
   *           operator: "+",
   *           value2: "1",
   *         },
   *         operator: "+",
   *         value2: {
   *           statement: "expression",
   *           value1: "val",
   *           operator: "+",
   *           value2: "1",
   *         },
   *     },
   *     before: true,
   *  }
   *
   *  Result
   *  "!((val+1)+(val+1))"
   */
  function write(json_expression) {
    if (json_expression.before) {
      text += json_expression.operator;
    }

    let value = json_expression.value1;
    if (!isObject(value)) {
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
      if (!isObject(value)) {
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
