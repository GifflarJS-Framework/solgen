"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImportModel = /** @class */ (function () {
    function ImportModel() {
    }
    ImportModel.prototype.execute = function (_a) {
        var identifierPath = _a.identifierPath, alias = _a.alias;
        var _import = {
            identifierPath: identifierPath,
            alias: alias,
        };
        return _import;
    };
    return ImportModel;
}());
exports.default = ImportModel;
