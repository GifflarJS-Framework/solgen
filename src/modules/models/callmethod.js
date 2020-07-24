const createValidator = require("../validation/validator");

/**
 * @todo Finish documentation
 * @param {*} _variable
 * @param {*} _method
 * @param {*} _value
 */
function createMethodModel(_variable, _method, _value) {
  //Validating
  const validator = createValidator();
  const validation = [
    {
      arg: "_variable",
      attribute: _variable,
      type: "string",
      required: true,
    },
    {
      arg: "_method",
      attribute: _method,
      type: "string",
      required: true,
    },
    {
      arg: "_value",
      attribute: _value,
      type: "string",
      required: true,
    },
  ];
  validator.validate(validation);

  const jsonmethod = {
    statement: "callmethod",
    variable: _variable,
    method: _method,
    value: _value,
  };

  return jsonmethod;
}

module.exports = createMethodModel;
