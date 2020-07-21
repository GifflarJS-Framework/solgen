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
    /**
     * @param {string} arg
     * @param {string} type
     */
    wrongStructure: (arg, structure) => {
      return "The '" + arg + "' argument must be of structure " + structure;
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

  function _throwWrongStructure(arg, type) {
    _throwError(messages.wrongType(arg, type));
  }

  /**
   * @name validate
   * @description Creates a validator object.
   * @param {Object} options The list of properties to be used to validate the attributes.
   * @example
   * Usage
   * const validation = [
   *  {
   *    arg: "variable",
   *    attribute: variable,
   *    type: "string",
   *    required: true,
   *  },
   *  {
   *    arg: "value",
   *    attribute: value,
   *    type: "string",
   *    required: true,
   *  },
   *];
   *
   * validator.validate(validation);
   */
  function validate(list) {
    if (Array.isArray(list)) {
      list.map((item) => {
        // REQUIRED
        if (item.required && !item.attribute) {
          _throwRequired(item.arg);
        } // TYPE
        else if (typeof item.attribute != item.type) {
          _throwWrongType(item.arg, item.type);
        } else if (item.isArray && !Array.isArray(item.attribute)) {
          _throwWrongStructure(item.arg, "Array");
        }
      });
    }
  }

  return { validate, messages };
}

module.exports = createValidator;
