"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CatchModel = /** @class */ (function () {
    function CatchModel() {
    }
    CatchModel.prototype.execute = function (_a) {
        var identifier = _a.identifier, parameters = _a.parameters;
        var _catch = {
            statement: "catch",
            identifier: identifier,
            parameters: parameters,
            content: [],
        };
        return _catch;
    };
    return CatchModel;
}());
exports.default = CatchModel;
