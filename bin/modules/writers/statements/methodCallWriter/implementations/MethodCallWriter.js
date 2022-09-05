"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __importDefault(require("../../../../../utils/helpers"));
var MethodCallWriter = /** @class */ (function () {
    function MethodCallWriter() {
    }
    MethodCallWriter.prototype.write = function (json) {
        var txt_args = helpers_1.default.getCommaExpression(json.args);
        return "".concat(json.variable, ".").concat(json.method, "(").concat(txt_args, ")");
    };
    return MethodCallWriter;
}());
exports.default = MethodCallWriter;
