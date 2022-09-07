"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ForModel = /** @class */ (function () {
    function ForModel() {
    }
    ForModel.prototype.execute = function (_a) {
        var variable = _a.variable, condition = _a.condition, expressionValue = _a.expressionValue;
        var _for = {
            statement: "for",
            variable: variable,
            condition: condition,
            expressionValue: expressionValue,
            content: [],
        };
        return _for;
    };
    return ForModel;
}());
exports.default = ForModel;
