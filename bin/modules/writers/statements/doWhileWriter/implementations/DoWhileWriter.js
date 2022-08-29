"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoWhileWriter = /** @class */ (function () {
    function DoWhileWriter() {
    }
    DoWhileWriter.prototype._init = function (contentWriter) {
        this.contentWriter = contentWriter;
    };
    DoWhileWriter.prototype.write = function (_doWhile) {
        if (!this.contentWriter)
            throw new Error("Content Writer not set.");
        var text = "do {\n".concat(this.contentWriter.write(_doWhile.content), "} ");
        text += "while(".concat(_doWhile.condition, ")");
        return text;
    };
    return DoWhileWriter;
}());
exports.default = DoWhileWriter;
