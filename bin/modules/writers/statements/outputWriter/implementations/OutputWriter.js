"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __importDefault(require("../../../../../utils/helpers"));
var OutputWriter = /** @class */ (function () {
    function OutputWriter() {
    }
    OutputWriter.prototype.write = function (outputs, variables, callback) {
        if (variables === void 0) { variables = []; }
        var text_return = "";
        var text_returns = "";
        var values = [];
        var types = [];
        if (outputs) {
            outputs.map(function (output) {
                var variable = variables.filter(function (variableItem) {
                    return variableItem.name === output;
                });
                if (variable[0]) {
                    values.push(variable[0].name);
                    types.push(variable[0].type);
                }
                return variable;
            });
            if (values.length && types.length) {
                text_return += helpers_1.default.getCommaExpression(values);
                text_returns += helpers_1.default.getCommaExpression(types);
                text_return = "return (".concat(text_return, ");\n");
                text_returns = "returns (".concat(text_returns, ")");
            }
        }
        if (typeof callback === "function") {
            callback({ text_returns: text_returns });
        }
        return text_return;
    };
    return OutputWriter;
}());
exports.default = OutputWriter;
