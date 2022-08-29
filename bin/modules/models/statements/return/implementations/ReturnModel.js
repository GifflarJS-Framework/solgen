"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReturnModel = /** @class */ (function () {
    function ReturnModel() {
    }
    ReturnModel.prototype.execute = function (_a) {
        var expressions = _a.expressions;
        var _return = {
            statement: "return",
            expressions: expressions,
        };
        return _return;
    };
    return ReturnModel;
}());
exports.default = ReturnModel;
