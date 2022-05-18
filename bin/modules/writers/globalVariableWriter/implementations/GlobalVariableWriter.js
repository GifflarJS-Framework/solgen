"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalVariableWriter = /** @class */ (function () {
    function GlobalVariableWriter() {
    }
    GlobalVariableWriter.prototype.write = function (variables) {
        var text = "";
        text = "//VARIABLES\n";
        var variableList = [];
        if (Array.isArray(variables)) {
            variableList = variables;
        }
        else {
            variableList = [variables];
        }
        variableList.map(function (v) {
            if (v.scope) {
                text += "".concat(v.type, " ").concat(v.scope, " ").concat(v.name);
                if (v.value) {
                    text += " = ".concat(v.value);
                }
                else {
                    text += "";
                }
                text += ";\n";
            }
            return text;
        });
        text += "\n\n";
        return text;
    };
    return GlobalVariableWriter;
}());
exports.default = GlobalVariableWriter;
