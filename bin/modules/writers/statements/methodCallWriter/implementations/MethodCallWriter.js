"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MethodCallWriter = /** @class */ (function () {
    function MethodCallWriter() {
    }
    MethodCallWriter.prototype.write = function (json) {
        return "".concat(json.variable, ".").concat(json.method, "(").concat(json.value, ")");
    };
    return MethodCallWriter;
}());
exports.default = MethodCallWriter;
