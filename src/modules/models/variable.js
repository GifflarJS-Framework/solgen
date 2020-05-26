function createVariableModel(
  _type,
  _name,
  _scope = "",
  _setMethod = false,
  _value = ""
) {
  let variable = {};
  if (_scope) {
    variable = {
      type: _type,
      name: _name,
      scope: _scope,
      value: _value,
      setMethod: _setMethod,
    };
  } else {
    variable = {
      statement: "variable",
      type: _type,
      name: _name,
      value: _value,
    };
  }

  return variable;
}

module.exports = createVariableModel;
