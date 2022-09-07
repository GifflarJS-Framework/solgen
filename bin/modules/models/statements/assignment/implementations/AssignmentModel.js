"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssignmentModel = /** @class */ (function () {
    function AssignmentModel() {
    }
    AssignmentModel.prototype.execute = function (_a) {
        var variable = _a.variable, expressionValue = _a.expressionValue;
        var assignment = {
            statement: "assignment",
            variable: variable,
            expressionValue: expressionValue,
        };
        return assignment;
    };
    return AssignmentModel;
}());
exports.default = AssignmentModel;
