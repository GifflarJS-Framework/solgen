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
var InterfaceWriter = /** @class */ (function () {
    function InterfaceWriter(eventWriter, modifierWriter, customErrorWriter, functionWriter, inheritsWriter) {
        this.eventWriter = eventWriter;
        this.modifierWriter = modifierWriter;
        this.customErrorWriter = customErrorWriter;
        this.functionWriter = functionWriter;
        this.inheritsWriter = inheritsWriter;
    }
    InterfaceWriter.prototype.write = function (interfaces, 
    /** To get every interface text individually. */
    callback) {
        var _this = this;
        if (!interfaces) {
            return "";
        }
        var text = "";
        interfaces.map(function (json, index) {
            // Writing the compiler version
            var txt_version = "pragma solidity 0.6.0;\n\n";
            // Begining of interface
            var txt_start = "interface ".concat(json.interface.name);
            // Writing inheritance
            var txt_inherts = _this.inheritsWriter.write(json.interface.inherits);
            if (txt_inherts)
                txt_inherts = " ".concat(txt_inherts);
            var txt_openBraces = " {\n";
            // Writing interface body
            var txt_events = _this.eventWriter.write(json.interface.events);
            var txt_modifiers = _this.modifierWriter.write(json.interface.modifiers);
            var txt_custom_errors = _this.customErrorWriter.write(json.interface.customErrors);
            var txt_functions = _this.functionWriter.write(json.interface.functions, { onlyPrototype: true });
            // End of interface
            var txt_close = "}\n\n";
            // Joining all texts
            var interfaceText = txt_version +
                txt_start +
                txt_inherts +
                txt_openBraces +
                txt_events +
                txt_modifiers +
                txt_custom_errors +
                txt_functions +
                txt_close;
            // Sending the contract code to callback
            if (callback && typeof callback === "function") {
                callback(interfaceText, index);
            }
            // Updating final text
            text += interfaceText;
            return text;
        });
        return text;
    };
    InterfaceWriter = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("EventWriter")),
        __param(1, (0, tsyringe_1.inject)("ModifierWriter")),
        __param(2, (0, tsyringe_1.inject)("CustomErrorWriter")),
        __param(3, (0, tsyringe_1.inject)("FunctionWriter")),
        __param(4, (0, tsyringe_1.inject)("InheritsWriter")),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
    ], InterfaceWriter);
    return InterfaceWriter;
}());
exports.default = InterfaceWriter;
