"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MethodCallModel = /** @class */ (function () {
    function MethodCallModel() {
    }
    MethodCallModel.prototype.execute = function (_a) {
        var variable = _a.variable, method = _a.method, value = _a.value;
        var jsonmethod = {
            statement: "method_call",
            variable: variable,
            method: method,
            value: value,
        };
        return jsonmethod;
    };
    return MethodCallModel;
}());
exports.default = MethodCallModel;
