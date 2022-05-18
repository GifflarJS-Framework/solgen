"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExpressionWriter = /** @class */ (function () {
    function ExpressionWriter() {
    }
    /**
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
    ExpressionWriter.prototype.write = function (json_expression) {
        var text = json_expression.value;
        return text;
    };
    return ExpressionWriter;
}());
exports.default = ExpressionWriter;
