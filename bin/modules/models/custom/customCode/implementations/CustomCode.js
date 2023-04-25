"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomCodeModel = /** @class */ (function () {
    function CustomCodeModel() {
    }
    CustomCodeModel.prototype.execute = function (_a) {
        var code = _a.code;
        var customCode = {
            code: code,
        };
        return customCode;
    };
    return CustomCodeModel;
}());
exports.default = CustomCodeModel;
