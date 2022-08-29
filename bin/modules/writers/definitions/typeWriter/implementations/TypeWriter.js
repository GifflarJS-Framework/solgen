"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeWriter = /** @class */ (function () {
    function TypeWriter() {
    }
    TypeWriter.prototype.write = function (types) {
        var text = "";
        types.map(function (type) {
            var typeText = "type ".concat(type.identifier, " is ").concat(type.type, ";");
            text += "".concat(typeText, "\n");
        });
        return text;
    };
    return TypeWriter;
}());
exports.default = TypeWriter;
