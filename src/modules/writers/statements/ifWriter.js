/**
 * @name createIfWriter
 * @description A **Factory** that creates an ifWriter, that is responsible for
 * knowing how to create an if/else statement by the json given through the write
 * function.
 * @param {Function} writeContent The function for creating a content, because
 * the if sttement also have content.
 * @example
 * Usage
 * const ifWriter = createIfWriter();
 *
 * Return
 * {
 *   write: [Function]
 * }
 */
function createIfWriter(writeContent) {
  /**
   * @name write
   * @description Writes an if statement in Solidity code.
   * @param {Object} json The if statement in json format.
   * @returns {string} The if statement in Solidity code as string.
   * @example
   * Input
   * {
   *  statement: "if",
   *   else: true,
   *   condition: "_val == 1",
   *    content: [
   *      {
   *        statement: "assignment"
   *        variable: "message",
   *        value: "_message",
   *      }
   *   ]
   *  }
   *
   *  Result
   *  "if(_val == 1){\n
   *   message = _message;\n
   *   }"
   */
  function write(json) {
    let text = "if(" + json.condition + ")";
    // if else is turned on
    if (json.else) {
      // if there is a condition (else if), if there isn't (else)
      json.condition ? (text = "else " + text) : (text = "else");
    }
    text = text + "{\n";
    text += writeContent(json.content);
    text += "}\n";

    return text;
  }

  return { write };
}

module.exports = createIfWriter;
