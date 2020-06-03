const createRequest = require("../../models/request");
const createIfWriter = require("./ifWriter");
const createAssignmentWriter = require("./assignmentWriter");
const createCalleventWriter = require("./callEventWriter");
const createCallMethodWriter = require("./callMethodWriter");
const createVariableWriter = require("../variableWriter");

/**
 * @name createContentWriter
 * @description A **Factory** that creates a contentWriter that is resposible
 * for knowing all the types of statement (if, else, ...) and also for providing
 * the function to write a content of a statement (which eventually
 * can contain another statement inside).
 * @returns {Object} The contentWriter object.
 * @example
 * Return
 * {
 *   write: [Function]
 * }
 */
function createContentWriter() {
  let request = createRequest();
  const ifWriter = createIfWriter(write);
  const assignmentWriter = createAssignmentWriter();
  const callEventWriter = createCalleventWriter();
  const callMethodWriter = createCallMethodWriter();
  const variableWriter = createVariableWriter();

  _statements = {
    assignment: assignmentWriter.write,
    if: ifWriter.write,
    callevent: callEventWriter.write,
    variable: variableWriter.write,
    callmethod: callMethodWriter.write,
  };

  /**
   * @name write
   * @description Writes the content of another statement.
   * @param {Object} content The Object content of the statement.
   * @param {Function} cb The callback function to handle any request to create an event.
   * @returns {string} The content parsed to Solidity code as a string.
   * @example
   * Prototype
   * function writeContent(content, cb) {
   * //[...]
   * }
   *
   * Json
   * [
   *     {
   *       statement: "assignment",
   *       variable: "message",
   *       value: "_message",
   *     },
   *     {
   *       statement: "if",
   *       condition: "_val == 1",
   *       content: [
   *         {
   *           statement: "callevent",
   *           name: "temperatureOverflow",
   *           args: ["_message, _val"],
   *         },
   *         {
   *           statement: "assignment",
   *           variable: "message",
   *           value: "_message",
   *         }
   *       ]
   *     }
   *  ]
   *
   * Usage
   * code += contentWriter.writeContent(f.content, (_request) => {
   *    console.log(_request);
   * });
   *
   * Return
   * "message = _message;\n
   * if(_val == 1){\n
   * emit temperatureOverflow(_message, _val);\n
   * message = _message;\n
   * }"
   */
  function write(content, cb) {
    let text = "";

    // Defining the statement content
    content.map((item) => {
      let handler = _statements[item.statement];
      if (handler) {
        text += handler(item, (_request) => {
          request = _request;
        });
      }
    });

    if (cb && typeof cb === "function") {
      cb(request);
    }

    return text;
  }

  return { write };
}

module.exports = createContentWriter;
