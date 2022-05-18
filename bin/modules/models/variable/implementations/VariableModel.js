"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VariableModel = /** @class */ (function () {
    function VariableModel() {
    }
    VariableModel.prototype.execute = function (_a) {
        var type = _a.type, name = _a.name, _b = _a.value, value = _b === void 0 ? "" : _b;
        var variable = {
            statement: "variable",
            type: type,
            name: name,
            value: value,
        };
        return variable;
    };
    return VariableModel;
}());
exports.default = VariableModel;
