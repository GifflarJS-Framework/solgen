"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MappingModel = /** @class */ (function () {
    function MappingModel() {
    }
    MappingModel.prototype.execute = function (_a) {
        var type = _a.type, typeName = _a.typeName, name = _a.name;
        var mapping = {
            statement: "mapping",
            type: type,
            typeName: typeName,
            name: name,
        };
        return mapping;
    };
    return MappingModel;
}());
exports.default = MappingModel;
