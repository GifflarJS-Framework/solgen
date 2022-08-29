"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomError = /** @class */ (function () {
    function CustomError() {
    }
    CustomError.prototype.execute = function (_a) {
        var name = _a.name, _b = _a.args, args = _b === void 0 ? [] : _b;
        var customError = {
            name: name,
            args: args,
        };
        return customError;
    };
    return CustomError;
}());
exports.default = CustomError;
