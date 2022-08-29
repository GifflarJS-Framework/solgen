"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeModel = /** @class */ (function () {
    function TypeModel() {
    }
    TypeModel.prototype.execute = function (_a) {
        var identifier = _a.identifier, type = _a.type;
        var _type = {
            identifier: identifier,
            type: type,
        };
        return _type;
    };
    return TypeModel;
}());
exports.default = TypeModel;
