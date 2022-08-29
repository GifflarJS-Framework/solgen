"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImportWriter = /** @class */ (function () {
    function ImportWriter() {
    }
    ImportWriter.prototype.write = function (_imports) {
        var text = "";
        _imports.map(function (_import) {
            text += "import \"".concat(_import.identifierPath, "\"");
            if (_import.alias) {
                text += " as ".concat(_import.alias);
            }
            text += ";\n";
        });
        if (_imports.length)
            text += "\n";
        return text;
    };
    return ImportWriter;
}());
exports.default = ImportWriter;
