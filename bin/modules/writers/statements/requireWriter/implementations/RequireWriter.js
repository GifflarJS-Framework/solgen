"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RequireWriter = /** @class */ (function () {
    function RequireWriter() {
    }
    RequireWriter.prototype.write = function (require) {
        var text = "require(".concat(require.condition);
        if (require.errorMessage) {
            text = text.concat(", \"".concat(require.errorMessage, "\")"));
        }
        else {
            text = text.concat(")");
        }
        return text;
    };
    return RequireWriter;
}());
exports.default = RequireWriter;
