"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VariableModel = /** @class */ (function () {
    function VariableModel() {
    }
    VariableModel.prototype.execute = function (_a) {
        var type = _a.type, dataLocation = _a.dataLocation, name = _a.name, expressionValue = _a.expressionValue;
        var variable = {
            statement: "variable",
            type: type,
            dataLocation: dataLocation,
            name: name,
            expressionValue: expressionValue,
        };
        return variable;
    };
    return VariableModel;
}());
exports.default = VariableModel;
