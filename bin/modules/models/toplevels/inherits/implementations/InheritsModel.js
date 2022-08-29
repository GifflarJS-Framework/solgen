"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InheritsModel = /** @class */ (function () {
    function InheritsModel() {
    }
    InheritsModel.prototype.execute = function (_a) {
        var identifier = _a.identifier, args = _a.args;
        var inherits = {
            identifier: identifier,
            args: args,
        };
        return inherits;
    };
    return InheritsModel;
}());
exports.default = InheritsModel;
