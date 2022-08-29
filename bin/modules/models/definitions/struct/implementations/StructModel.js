"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StructModel = /** @class */ (function () {
    function StructModel() {
    }
    StructModel.prototype.execute = function (_a) {
        var identifier = _a.identifier, variables = _a.variables, mappings = _a.mappings;
        var struct = {
            identifier: identifier,
            variables: variables,
            mappings: mappings,
        };
        return struct;
    };
    return StructModel;
}());
exports.default = StructModel;
