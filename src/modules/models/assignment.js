function createAssignmentModel(_variable, _value) {
  const assignment = {
    statement: "assignment",
    variable: _variable,
    value: _value,
  };

  return assignment;
}

module.exports = createAssignmentModel;
