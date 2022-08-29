"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoWhileModel = /** @class */ (function () {
    function DoWhileModel() {
    }
    DoWhileModel.prototype.execute = function (_a) {
        var condition = _a.condition;
        var _while = {
            statement: "do_while",
            condition: condition,
            content: [],
        };
        return _while;
    };
    return DoWhileModel;
}());
exports.default = DoWhileModel;
