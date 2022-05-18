"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalVariableModel = /** @class */ (function () {
    function GlobalVariableModel() {
    }
    GlobalVariableModel.prototype.execute = function (_a) {
        var type = _a.type, name = _a.name, _b = _a.scope, scope = _b === void 0 ? "" : _b, _c = _a.value, value = _c === void 0 ? "" : _c;
        var globalVariable = {
            statement: "global_variable",
            type: type,
            name: name,
            scope: scope,
            value: value,
        };
        return globalVariable;
    };
    return GlobalVariableModel;
}());
exports.default = GlobalVariableModel;
