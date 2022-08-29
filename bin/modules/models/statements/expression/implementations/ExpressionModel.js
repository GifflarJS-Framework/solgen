"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExpressionModel = /** @class */ (function () {
    function ExpressionModel() {
    }
    ExpressionModel.prototype.execute = function (_a) {
        var value = _a.value;
        var expression = {
            statement: "expression",
            value: value,
        };
        return expression;
    };
    return ExpressionModel;
}());
exports.default = ExpressionModel;
