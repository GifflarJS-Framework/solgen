"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var StructWriter = /** @class */ (function () {
    function StructWriter(variableModel, mappingModel, variableWriter, mappingWriter) {
        this.variableModel = variableModel;
        this.mappingModel = mappingModel;
        this.variableWriter = variableWriter;
        this.mappingWriter = mappingWriter;
    }
    StructWriter.prototype.write = function (struct) {
        var _this = this;
        // Writing variables
        var variablesText = "";
        struct.variables.map(function (variable) {
            var localVariable = _this.variableModel.execute(variable);
            var variableText = _this.variableWriter.write(localVariable);
            variablesText = variablesText.concat("".concat(variableText, ";\n"));
        });
        // Writing mappings
        var mappingsText = "";
        struct.mappings.map(function (mapping) {
            var localMapping = _this.mappingModel.execute(mapping);
            var mappingText = _this.mappingWriter.write(localMapping);
            mappingsText = mappingsText.concat("".concat(mappingText, ";\n"));
        });
        // Writing final text
        var text = "struct ".concat(struct.identifier, " {\n").concat(variablesText).concat(mappingsText, "}");
        return text;
    };
    StructWriter = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("VariableModel")),
        __param(1, (0, tsyringe_1.inject)("MappingModel")),
        __param(2, (0, tsyringe_1.inject)("VariableWriter")),
        __param(3, (0, tsyringe_1.inject)("MappingWriter")),
        __metadata("design:paramtypes", [Object, Object, Object, Object])
    ], StructWriter);
    return StructWriter;
}());
exports.default = StructWriter;
