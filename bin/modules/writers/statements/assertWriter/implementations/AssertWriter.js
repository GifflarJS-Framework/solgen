"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssertWriter = /** @class */ (function () {
    function AssertWriter() {
    }
    AssertWriter.prototype.write = function (assert) {
        var text = "assert(".concat(assert.condition, ")");
        return text;
    };
    return AssertWriter;
}());
exports.default = AssertWriter;
