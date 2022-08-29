"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnumModel = /** @class */ (function () {
    function EnumModel() {
    }
    EnumModel.prototype.execute = function (_a) {
        var identifier = _a.identifier, identifiersOptions = _a.identifiersOptions;
        var _enum = {
            identifier: identifier,
            identifiersOptions: identifiersOptions,
        };
        return _enum;
    };
    return EnumModel;
}());
exports.default = EnumModel;
