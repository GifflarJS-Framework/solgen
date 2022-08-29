"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TryModel = /** @class */ (function () {
    function TryModel() {
    }
    TryModel.prototype.execute = function (_a) {
        var expression = _a.expression, parameters = _a.parameters;
        var _try = {
            statement: "try",
            expression: expression,
            parameters: parameters,
            content: [],
        };
        return _try;
    };
    return TryModel;
}());
exports.default = TryModel;
