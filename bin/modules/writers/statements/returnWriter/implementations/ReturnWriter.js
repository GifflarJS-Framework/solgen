"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __importDefault(require("../../../../../utils/helpers"));
var ReturnWriter = /** @class */ (function () {
    function ReturnWriter() {
    }
    ReturnWriter.prototype.write = function (_return) {
        var text = "return ";
        var txt_expression = helpers_1.default.getCommaExpression(_return.expressions);
        text += "(".concat(txt_expression, ")");
        return text;
    };
    return ReturnWriter;
}());
exports.default = ReturnWriter;
