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
var StateVariableWriter = /** @class */ (function () {
    function StateVariableWriter(expressionWriter, expressionModel) {
        this.expressionWriter = expressionWriter;
        this.expressionModel = expressionModel;
    }
    StateVariableWriter.prototype.write = function (variables) {
        var _this = this;
        var text = "";
        text = "//VARIABLES\n";
        variables.map(function (v) {
            // Type
            var variableText = "".concat(v.type);
            // Scope
            if (v.scope)
                variableText += " ".concat(v.scope);
            // State mutability
            if (v.stateMutability)
                variableText += " ".concat(v.stateMutability);
            // Variable name
            variableText += " ".concat(v.name);
            // Value
            if (v.expressionValue) {
                var expression = _this.expressionModel.execute({
                    value: v.expressionValue,
                });
                variableText += " = ".concat(_this.expressionWriter.write(expression));
            }
            text += "".concat(variableText, ";\n");
            return text;
        });
        text += "\n\n";
        return text;
    };
    StateVariableWriter = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("ExpressionWriter")),
        __param(1, (0, tsyringe_1.inject)("ExpressionModel")),
        __metadata("design:paramtypes", [Object, Object])
    ], StateVariableWriter);
    return StateVariableWriter;
}());
exports.default = StateVariableWriter;
