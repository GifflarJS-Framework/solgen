"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createExpressionWriter() {
    var expressionWriter = {
        /**
         * @name write
         * @description Writes an expression statement in Solidity code.
         * @param {Object} json The expression statement in json format.
         * @returns {string} The expression statement in Solidity code as string.
         * @example
         * Input
         * {
         *     statement: "expression",
         *     value: "!((val+1)+(val+1))"
         *  }
         *
         *  Result
         *  "!((val+1)+(val+1))"
         */
        write: function (json_expression) {
            var text = json_expression.value;
            return text;
        },
    };
    return expressionWriter;
}
exports.default = createExpressionWriter;
