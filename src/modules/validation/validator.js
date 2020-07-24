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
    wrongType: (arg, type, actualType) => {
      return (
        "The '" +
        arg +
        "' argument must be of type " +
        type +
        ". Actual type is " +
        actualType +
        "."
      );
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

  function _throwWrongType(arg, type, actualType) {
    _throwError(messages.wrongType(arg, type, actualType));
  }

  function _throwWrongStructure(arg, type, actualType) {
    _throwError(messages.wrongType(arg, type, actualType));
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
   *    type: ["string", "object"],
   *    required: true,
   *  },
   *];
   *
   * validator.validate(validation);
   */
  function validate(list) {
    if (Array.isArray(list)) {
      list.map((item) => {
        const actualType = typeof item.attribute;
        // REQUIRED
        if (item.required && !item.attribute) {
          _throwRequired(item.arg);
        }
        // TYPE
        if (Array.isArray(item.type)) {
          // If the expected type is like: ["string", "object"]
          if (item.attribute && !item.type.includes(actualType)) {
            _throwWrongType(item.arg, item.type, actualType);
          }
        } else {
          // If the expected type is like: "object"
          if (item.attribute && actualType != item.type) {
            _throwWrongType(item.arg, item.type, actualType);
          }
        }
        // IS ARRAY
        if (item.attribute && item.isArray && !Array.isArray(item.attribute)) {
          _throwWrongStructure(item.arg, "Array", actualType);
        }
      });
    }
  }

  return { validate, messages };
}

module.exports = createValidator;
