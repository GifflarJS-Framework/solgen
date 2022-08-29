"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StateMappingModel = /** @class */ (function () {
    function StateMappingModel() {
    }
    StateMappingModel.prototype.execute = function (_a) {
        var type = _a.type, typeName = _a.typeName, name = _a.name, scope = _a.scope;
        var mapping = {
            type: type,
            typeName: typeName,
            name: name,
            scope: scope,
        };
        return mapping;
    };
    return StateMappingModel;
}());
exports.default = StateMappingModel;
