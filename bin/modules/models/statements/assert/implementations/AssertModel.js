"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertModel = /** @class */ (function () {
    function AssertModel() {
    }
    AssertModel.prototype.execute = function (_a) {
        var condition = _a.condition;
        var assert = {
            statement: "assert",
            condition: condition,
        };
        return assert;
    };
    return AssertModel;
}());
exports.default = AssertModel;
