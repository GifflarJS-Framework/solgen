"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WhileModel = /** @class */ (function () {
    function WhileModel() {
    }
    WhileModel.prototype.execute = function (_a) {
        var condition = _a.condition;
        var _while = {
            statement: "while",
            condition: condition,
            content: [],
        };
        return _while;
    };
    return WhileModel;
}());
exports.default = WhileModel;
