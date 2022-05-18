"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createMethodCallWriter() {
    var methodCallWriter = {
        /**
         * @name write
         * @description Creates a Solidity array push statement
         * @param {string} json The json with the variable and value to be pushed to.
         * @returns {string} The Solidity code in string format.
         * @private
         * @example
         * Json
         * {
         *   statement: "method_call",
         *   variable: "messages",
         *   method: "push",
         *   value: "_message"
         * }
         *
         * Return
         * "messages.push(_message);"
         */
        write: function (json) {
            return "".concat(json.variable, ".").concat(json.method, "(").concat(json.value, ")");
        },
    };
    return methodCallWriter;
}
exports.default = createMethodCallWriter;
