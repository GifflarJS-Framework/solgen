const createRequest = require("./request");

/**
 * @name createStatementWriter
 * @description A **Factory** that creates a statementWriter that is resposible
 * for knowing all the types of statement (if, else, ...) and also for providing
 * the function to write a content of a statement (which eventually
 * can contain another statement inside).
 * @returns {Object} The statementWriter object.
 * @example
 * Return
 * {
 *   writeContent: [Function],
 *   writeInputs: [Function]
 * }
 */
function createStatementWriter() {
  let request = createRequest();

  _statements = {
    /**
     * Creates a Solidity assignment statement
     * @param {string} json The json with the variable and value to be assigned to.
     * @returns {string} The Solidity code in string format.
     * @private
     * @example
     * Json
     * {
     *   statement: "assignment",
     *   variable: "message",
     *   value: "_message"
     * }
     *
     * Return
     * "message = _message;"
     */
    assignment: (json) => {
      const text = json.variable + " = " + json.value + ";\n";
      return text;
    },

    /**
     * @name if
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
    if: (json) => {
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
    },

    /**
     * Creates a Solidity array push statement
     * @param {string} json The json with the variable and value to be pushed to.
     * @returns {string} The Solidity code in string format.
     * @private
     * @example
     * Json
     * {
     *   statement: "push",
     *   variable: "messages",
     *   value: "_message"
     * }
     *
     * Return
     * "messages.push(_message);"
     */
    push: (json) => {
      return json.variable + ".push(" + json.value + ");\n";
    },

    //CALLS
    /**
     * @name callevent
     * @description Writes a Solidity event call. **This method updates the request
     * object to send the events to be created by the eventWriter**.
     * @param {Object} event The event object to be wrote in Solidity code.
     * @returns {string} The event Solidity code as **string**.
     * @example
     * Input
     * {
     *   statement: "callevent",
     *   name: "myEvent",
     *   inputs: {
     *      name: "_message",
     *      type: "string"
     *   },
     *   {
     *      name: "_val",
     *      type: "uint"
     *   }
     * }
     *
     * Return
     * "emit myEvent(_message, _val);"
     */
    callevent: (event) => {
      request.events.push(event);
      const inputs_copy = [];
      // Copying the object or else the args function
      // shifts the first element of the original object
      // We need the object later for creating the events
      Object.assign(inputs_copy, event.inputs);
      const text =
        "emit " + event.name + "(" + writeInputs(inputs_copy, false) + ");\n";
      return text;
    },
  };

  /**
   * @name writeInputs
   * @description Writes the inputs of a Solidity code.
   * @param {Object[]} inputs The JSON list of the inputs to be wrote.
   * @param {Boolean} typeon The value to turn on or off the type names before the
   * variable. **Default is true**
   * @returns {string} The inputs parsed to Solidity code as string.
   * @private
   * @example
   * Prototype
   * function writeInputs(inputs, typeon = true) {
   * //[...]
   * }
   *
   * Input
   * [
   *   {
   *     name:"_message",
   *     type: "string"
   *   },
   *   {
   *     name: "_number",
   *     type: "uint"
   *   }
   * ]
   *
   * Usage
   * "(" + statementWriter.writeInputs(inputs) + ")"
   * => "(string _message, uint _number)"
   *
   * Usage
   * "(" + statementWriter.writeInputs(inputs, false) + ")"
   * => "(_message, _number)"
   *
   */
  function writeInputs(inputs, typeon = true) {
    let text = "";

    // If there are no inputs
    if (!inputs.length) {
      return text;
    }

    // Defining the first input
    if (typeon) {
      text += inputs[0].type + " ";
    }
    text += inputs[0].name;

    // Removing the first element
    inputs.shift();

    // Defining the other inputs
    inputs.map((input) => {
      text += ", ";
      if (typeon) {
        text += input.type + " ";
      }
      text += input.name;
    });

    return text;
  }

  /**
   * @name writeContent
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
   * code += statementWriter.writeContent(f.content, (_request) => {
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
  function writeContent(content, cb) {
    let text = "";

    // Defining the statement content
    content.map((item) => {
      let handler = _statements[item.statement];
      if (handler) {
        text += handler(item);
      }
    });

    if (cb && typeof cb === "function") {
      cb(request);
    }

    return text;
  }

  return { writeContent, writeInputs };
}

module.exports = createStatementWriter;
