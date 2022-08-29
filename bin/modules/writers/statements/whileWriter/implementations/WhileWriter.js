"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WhileWriter = /** @class */ (function () {
    function WhileWriter() {
    }
    WhileWriter.prototype._init = function (contentWriter) {
        this.contentWriter = contentWriter;
    };
    WhileWriter.prototype.write = function (_while) {
        if (!this.contentWriter)
            throw new Error("Content Writer not set.");
        var text = "while(".concat(_while.condition, "){\n");
        text += "".concat(this.contentWriter.write(_while.content), "}\n");
        return text;
    };
    return WhileWriter;
}());
exports.default = WhileWriter;
