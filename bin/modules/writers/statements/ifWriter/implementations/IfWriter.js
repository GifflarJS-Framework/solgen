"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IfWriter = /** @class */ (function () {
    function IfWriter() {
    }
    IfWriter.prototype._init = function (contentWriter) {
        this.contentWriter = contentWriter;
    };
    IfWriter.prototype.write = function (json) {
        if (!this.contentWriter)
            throw new Error("Content Writer not set.");
        var text = "if(".concat(json.condition, ")");
        // if else is turned on
        if (!json.condition) {
            // If no condition setted
            text = "else";
        }
        else if (json.else) {
            // if there is a condition and else = true (else if), if there isn't (else)
            text = "else ".concat(text);
        }
        text += "{\n";
        text += this.contentWriter.write(json.content);
        text += "}\n";
        return text;
    };
    return IfWriter;
}());
exports.default = IfWriter;
