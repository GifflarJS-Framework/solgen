"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MethodCallModel = /** @class */ (function () {
    function MethodCallModel() {
    }
    MethodCallModel.prototype.execute = function (_a) {
        var variable = _a.variable, method = _a.method, args = _a.args;
        var jsonmethod = {
            statement: "method_call",
            variable: variable,
            method: method,
            args: args,
        };
        return jsonmethod;
    };
    return MethodCallModel;
}());
exports.default = MethodCallModel;
