"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsingModel = /** @class */ (function () {
    function UsingModel() {
    }
    UsingModel.prototype.execute = function (_a) {
        var identifier = _a.identifier, type = _a.type;
        var using = {
            identifier: identifier,
            type: type,
        };
        return using;
    };
    return UsingModel;
}());
exports.default = UsingModel;
