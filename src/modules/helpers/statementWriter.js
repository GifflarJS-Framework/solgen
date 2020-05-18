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
     * @param {string} variable - The variable to assign the value to.
     * @param {string} value - The value to be assigned to the variable.
     */
    assignment: (json) => {
      const text = json.variable + " = " + json.value + ";\n";
      return text;
    },

    /**
     * @name myif
     * @description Writes an if statement in Solidity code.
     * @param {Object} json The if statement in json format.
     * @returns {string} The if statement in Solidity code as string.
     * @example
     * Input
     * if: {
        else: true 
        condition: "_val == 1",
         content: {
           assignment: {
             variable: "message",
             value: "_message",
           }
         }
       }

       Result
       "if(_val == 1){\n
        message = _message;\n
        }"
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

    push: (json) => {
      return json.variable + ".push(" + json.value + ");\n";
    },

    //CALLS
    /**
     * @name callevent
     * @description Writes a Solidity event call
     * @param {Object} event - The event object to be wrote in Solidity code.
     * @returns {string} The event Solidity code as **string**.
     * @example
     * Input
     * {
     *   name: "myEvent",
     *   args: ["_input"],
     * }
     *
     * Return
     * "emit myEvent(_input);"
     */
    callevent: (event) => {
      request.events.push(event);
      const inputs_copy = [];
      // Copying the object or else the args function
      // shifts the first element of the original object
      // We need the object later for creating the events
      Object.assign(inputs_copy, event.inputs);
      const text = "emit " + event.name + "(" + args(inputs_copy) + ");\n";
      return text;
    },
  };

  /**
   * @name args
   * @description Writes the arguments of a calling statement.
   * @param {Object[]} _arguments - The arguments to be wrote in Solidity code.
   * @returns {string} The arguments organized as a **string**.
   * @example
   * Input
   * ["arg1", "arg2"]
   *
   * Return
   * arg1, arg2
   *
   * Usage
   * "(" + statementWriter.args(["arg1", "arg2"]) + ")"
   * => "(arg1, arg2)"
   */
  function args(_arguments) {
    let text = "";

    // If there are no arguments
    if (!_arguments[0]) {
      return text;
    }

    // Setting the first argument
    text += _arguments[0].name;

    // Removing first element
    _arguments.shift();

    // Setting all the other arguments
    _arguments.map((arg) => {
      text += ", " + arg.name;
    });

    return text;
  }

  /**
   * @name writeInputs
   * @description Writes the inputs of a Solidity code.
   * @param {Object[]} inputs - The JSON list of the inputs to be wrote.
   * @returns {string} The inputs parsed to Solidity code as string.
   * @private
   * @example
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
   * Return
   * string _message, uint _number
   *
   * Usage
   * "(" + statementWriter.writeInputs(inputs) + ")"
   * => "(string _message, uint _number)"
   */
  function writeInputs(inputs) {
    let text = "";

    // If there are no inputs
    if (!inputs.length) {
      return text;
    }

    // Defining the first input
    text += inputs[0].type + " " + inputs[0].name;

    // Removing the first element
    inputs.shift();

    // Defining the other inputs
    inputs.map((input) => {
      text += ", " + input.type + " " + input.name;
    });

    return text;
  }

  /**
   * @name writeContent
   * @description Writes the content of another statement.
   * @param {Object} content - The Object content of the statement.
   * @returns {string} The content parsed to Solidity code as a string.
   * @example
   * {
        assignment: {
          variable: "message",
          value: "_message",
        },
        myif: {
          condition: "_val == 1",
          content: {
            callevent: {
              name: "temperatureOverflow",
              args: ["_message, _val"],
            },
            assignment: {
              variable: "message",
              value: "_message",
            }
          }
        }
     }
    
     Return
     "message = _message;\n
     if(_val == 1){\n
     emit temperatureOverflow(_message, _val);\n
     message = _message;\n
     }"
   */
  function writeContent(content, cb) {
    let text = "";
    console.log(content);

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
