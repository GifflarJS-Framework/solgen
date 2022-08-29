"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MappingWriter = /** @class */ (function () {
    function MappingWriter() {
    }
    MappingWriter.prototype._writeTypeName = function (typeName) {
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
    MappingWriter.prototype._writeNestedMapping = function (nestedMapping) {
        var text = "mapping(".concat(nestedMapping.type.regularType || nestedMapping.type.customType, " => ");
        var typeNameText = this._writeTypeName(nestedMapping.typeName);
        if (!typeNameText)
            throw Error("Nested mapping type name not defined");
        text = "".concat(text.concat(typeNameText), ")");
        return text;
    };
    MappingWriter.prototype.write = function (mapping) {
        var mappingKeyTypeText = mapping.type.regularType || mapping.type.customType;
        var mappingTypeNameText = this._writeTypeName(mapping.typeName);
        if (!mappingTypeNameText)
            throw Error("Mapping type name not defined");
        var text = "mapping(".concat(mappingKeyTypeText, " => ").concat(mappingTypeNameText, ") ").concat(mapping.name);
        return text;
    };
    return MappingWriter;
}());
exports.default = MappingWriter;
