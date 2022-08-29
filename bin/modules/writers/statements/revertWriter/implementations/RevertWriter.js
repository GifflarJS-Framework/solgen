"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __importDefault(require("../../../../../utils/helpers"));
var RevertWriter = /** @class */ (function () {
    function RevertWriter() {
    }
    RevertWriter.prototype.write = function (revert) {
        if (revert.message) {
            return "revert(\"".concat(revert.message, "\");");
        }
        else if (revert.customErrorCall) {
            var argsText = helpers_1.default.getCommaExpression(revert.customErrorCall.args);
            return "revert ".concat(revert.customErrorCall.customErrorName, "(").concat(argsText, ");");
        }
        else {
            return "revert();";
        }
    };
    return RevertWriter;
}());
exports.default = RevertWriter;
