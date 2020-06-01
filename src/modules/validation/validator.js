function createValidator() {
  const messages = {
    /**
     * @param {string} arg
     */
    required: (arg) => {
      return "The '" + arg + "' argument is required.";
    },
    /**
     * @param {string} arg
     * @param {string} type
     */
    wrongType: (arg, type) => {
      return "The '" + arg + "' argument must be of type " + type;
    },
  };

  function _throwError(message) {
    throw new Error(message);
  }

  function _throwRequired(arg) {
    _throwError(messages.required(arg));
  }

  function _throwWrongType(arg, type) {
    _throwError(messages.wrongType(arg, type));
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

  return { validate, messages };
}

module.exports = createValidator;
