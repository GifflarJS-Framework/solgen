"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomCodeWriter = /** @class */ (function () {
    function CustomCodeWriter() {
    }
    CustomCodeWriter.prototype.write = function (customCodes) {
        var text = "";
        customCodes.map(function (customCode) {
            text += "".concat(customCode.code, "\n");
        });
        return text;
    };
    return CustomCodeWriter;
}());
exports.default = CustomCodeWriter;
