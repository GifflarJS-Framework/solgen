"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StateVariableWriter = /** @class */ (function () {
    function StateVariableWriter() {
    }
    StateVariableWriter.prototype.write = function (variables) {
        var text = "";
        text = "//VARIABLES\n";
        variables.map(function (v) {
            // Type
            var variableText = "".concat(v.type);
            // Scope
            if (v.scope)
                variableText += " ".concat(v.scope);
            // State mutability
            if (v.stateMutability)
                variableText += " ".concat(v.stateMutability);
            // Variable name
            variableText += " ".concat(v.name);
            // Value
            if (v.value)
                variableText += " = ".concat(v.value);
            text += "".concat(variableText, ";\n");
            return text;
        });
        text += "\n\n";
        return text;
    };
    return StateVariableWriter;
}());
exports.default = StateVariableWriter;
