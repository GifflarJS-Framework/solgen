"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsingWriter = /** @class */ (function () {
    function UsingWriter() {
    }
    UsingWriter.prototype.write = function (usings) {
        var text = "";
        usings.map(function (using) {
            text += "using ".concat(using.identifier, " for ").concat(using.type, ";\n");
        });
        if (usings.length) {
            text += "\n";
        }
        return text;
    };
    return UsingWriter;
}());
exports.default = UsingWriter;
