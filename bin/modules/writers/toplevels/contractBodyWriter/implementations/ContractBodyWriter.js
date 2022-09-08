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
var ContractBodyWriter = /** @class */ (function () {
    function ContractBodyWriter(eventWriter, functionWriter, stateVariableWriter, modifierWriter, stateMappingWriter, usingWriter, enumWriter) {
        this.eventWriter = eventWriter;
        this.functionWriter = functionWriter;
        this.stateVariableWriter = stateVariableWriter;
        this.modifierWriter = modifierWriter;
        this.stateMappingWriter = stateMappingWriter;
        this.usingWriter = usingWriter;
        this.enumWriter = enumWriter;
    }
    ContractBodyWriter.prototype.write = function (bodyItem) {
        // Usings
        var txt_using = this.usingWriter.write(bodyItem.usings || []);
        // Enums
        var txt_enums = this.enumWriter.write(bodyItem.enums || []);
        // Variables
        var txt_variables = this.stateVariableWriter.write(bodyItem.variables || []);
        // Mappings
        var txt_mappings = this.stateMappingWriter.write(bodyItem.mappings || []);
        // Events
        var txt_events = this.eventWriter.write(bodyItem.events || []);
        // Modifiers
        var txt_modifiers = this.modifierWriter.write(bodyItem.modifiers || []);
        // Custom Errors
        // *Custom errors are only available starting from v0.8.4 solidity version
        // const txt_custom_errors = this.customErrorWriter.write(
        //   bodyItem.customErrors || []
        // );
        // Functions
        var txt_functions = this.functionWriter.write(bodyItem.functions || []);
        var bodyText = "".concat(txt_using +
            txt_enums +
            txt_variables +
            txt_mappings +
            txt_events +
            txt_modifiers +
            txt_functions);
        return bodyText;
    };
    ContractBodyWriter = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("EventWriter")),
        __param(1, (0, tsyringe_1.inject)("FunctionWriter")),
        __param(2, (0, tsyringe_1.inject)("StateVariableWriter")),
        __param(3, (0, tsyringe_1.inject)("ModifierWriter")),
        __param(4, (0, tsyringe_1.inject)("StateMappingWriter")),
        __param(5, (0, tsyringe_1.inject)("UsingWriter")),
        __param(6, (0, tsyringe_1.inject)("EnumWriter")),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object])
    ], ContractBodyWriter);
    return ContractBodyWriter;
}());
exports.default = ContractBodyWriter;
