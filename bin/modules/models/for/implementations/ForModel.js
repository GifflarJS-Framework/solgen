"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ForModel = /** @class */ (function () {
    function ForModel() {
    }
    ForModel.prototype.execute = function (_a) {
        var assignment = _a.assignment, condition = _a.condition, expression = _a.expression;
        var _for = {
            statement: "for",
            assignment: assignment,
            condition: condition,
            expression: expression,
            content: [],
        };
        return _for;
    };
    return ForModel;
}());
exports.default = ForModel;
