"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssignmentModel = /** @class */ (function () {
    function AssignmentModel() {
    }
    AssignmentModel.prototype.execute = function (_a) {
        var variable = _a.variable, value = _a.value;
        var assignment = {
            statement: "assignment",
            variable: variable,
            value: value,
        };
        return assignment;
    };
    return AssignmentModel;
}());
exports.default = AssignmentModel;
