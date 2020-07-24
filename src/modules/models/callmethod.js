/**
 * @todo Finish documentation
 * @param {*} variable
 * @param {*} method_
 * @param {*} value
 */
function createMethodModel(variable, method_, value) {
  const method = {
    statement: "callmethod",
    variable: variable,
    method: method_,
    value: value,
  };

  return method;
}

module.exports = createMethodModel;
