"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RequireModel = /** @class */ (function () {
    function RequireModel() {
    }
    RequireModel.prototype.execute = function (_a) {
        var condition = _a.condition, errorMessage = _a.errorMessage;
        var require = {
            statement: "require",
            condition: condition,
            errorMessage: errorMessage,
        };
        return require;
    };
    return RequireModel;
}());
exports.default = RequireModel;
