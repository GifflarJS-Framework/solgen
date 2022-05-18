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
var VariableWriter = /** @class */ (function () {
    function VariableWriter(newContractWriter) {
        this.newContractWriter = newContractWriter;
        this.statements = {
            newcontract: this.newContractWriter.write,
        };
    }
    VariableWriter.prototype._handleValue = function (value) {
        // If the value is a statement
        if (typeof value !== "string") {
            var key = value.statement;
            var handler = this.statements[key];
            // If the statement was found
            if (handler) {
                return handler(value);
            }
            // If not found throw error
            throw Error("Invalid statement inside variable.");
        }
        // If value is not a statement, return the same value
        else {
            return value;
        }
    };
    VariableWriter.prototype.write = function (variable) {
        var text = "";
        // If variable not an array, is the local variable definition
        if (variable.value) {
            var value = this._handleValue(variable.value);
            text += "".concat(variable.type, " ").concat(variable.name, " = ").concat(value);
        }
        else {
            text += "".concat(variable.type, " ").concat(variable.name);
        }
        return text;
    };
    VariableWriter = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("NewContractWriter")),
        __metadata("design:paramtypes", [Object])
    ], VariableWriter);
    return VariableWriter;
}());
exports.default = VariableWriter;
