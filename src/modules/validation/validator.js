function createValidator() {
  function _throwError(message) {
    throw new Error(message);
  }

  function _throwRequired(arg) {
    _throwError("The '" + arg + "' argument is required.");
  }

  function _throwWrongType(arg, type) {
    _throwError("The '" + arg + "' argument must be of type " + type);
  }

  function validate(list) {
    if (Array.isArray(list)) {
      list.map((item) => {
        // REQUIRED
        if (item.required && !item.value) {
          _throwRequired(item.arg);
        } // TYPE
        else if (typeof item.value != item.type) {
          _throwWrongType(item.arg, item.type);
        }
      });
    }
  }

  return { validate };
}

module.exports = createValidator;
