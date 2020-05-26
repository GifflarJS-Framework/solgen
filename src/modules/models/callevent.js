/**
 *
 * @param {*} _name
 * @param {Object[]} _inputs The list of inputs. (Optional)
 * @example
 * Prototype
 * function createCallEvent(_name, _inputs = []);
 *
 * Inputs
 * inputs: [
 *     {
 *       name: "_message",
 *       type: "string",
 *     },
 *     {
 *       name: "_val",
 *       type: "uint",
 *     },
 *   ],
 * };
 */
function createEventModel(_name, _inputs = []) {
  const event = {
    statement: "callevent",
    name: _name,
    inputs: _inputs,
  };

  function addInput(_type, _variable) {
    const new_input = {
      name: _variable,
      type: _type,
    };

    event.inputs.push(new_input);

    return event;
  }

  event.addInput = addInput;

  return event;
}

module.exports = createEventModel;
