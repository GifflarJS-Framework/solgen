"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StateMappingWriter = /** @class */ (function () {
    function StateMappingWriter() {
    }
    StateMappingWriter.prototype._writeTypeName = function (typeName) {
        var mappingTypeName = typeName.regularType || typeName.customType;
        if (!mappingTypeName) {
            // If an array
            if (typeName.array) {
                mappingTypeName = "".concat(typeName.array.arrayType, "[").concat(typeName.array.arraySize || "", "]");
            }
            // If nested mapping
            if (typeName.nestedMapping) {
                mappingTypeName = this._writeNestedMapping(typeName.nestedMapping);
            }
        }
        return mappingTypeName;
    };
    StateMappingWriter.prototype._writeNestedMapping = function (nestedMapping) {
        var text = "mapping(".concat(nestedMapping.type.regularType || nestedMapping.type.customType, " => ");
        var typeNameText = this._writeTypeName(nestedMapping.typeName);
        if (!typeNameText)
            throw Error("Nested mapping type name not defined");
        text = "".concat(text.concat(typeNameText), ")");
        return text;
    };
    StateMappingWriter.prototype.write = function (mappings) {
        var _this = this;
        var text = "";
        mappings.map(function (mapping) {
            var mappingText = "mapping(".concat(mapping.type.regularType || mapping.type.customType, " => ");
            var typeName = mapping.typeName;
            var typeNameText = _this._writeTypeName(typeName);
            if (!typeNameText)
                throw Error("Nested mapping type name not defined");
            mappingText = mappingText.concat(typeNameText);
            mappingText = mappingText.concat(") ".concat(mapping.scope || "", " ").concat(mapping.name, ";"));
            text = text.concat("".concat(mappingText, "\n"));
        });
        if (mappings.length) {
            text = text.concat("\n");
        }
        return text;
    };
    return StateMappingWriter;
}());
exports.default = StateMappingWriter;
