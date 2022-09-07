"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StateVariableModel = /** @class */ (function () {
    function StateVariableModel() {
    }
    StateVariableModel.prototype.execute = function (_a) {
        var type = _a.type, name = _a.name, scope = _a.scope, stateMutability = _a.stateMutability, expressionValue = _a.expressionValue;
        if (stateMutability === "constant" && !expressionValue)
            throw Error("A constant must have an initial value.");
        var stateVariable = {
            type: type,
            name: name,
            scope: scope || "",
            stateMutability: stateMutability,
            expressionValue: expressionValue,
        };
        return stateVariable;
    };
    return StateVariableModel;
}());
exports.default = StateVariableModel;
