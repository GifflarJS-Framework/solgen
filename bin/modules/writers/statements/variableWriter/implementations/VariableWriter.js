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
    function VariableWriter(expressionModel, expressionWriter) {
        this.expressionModel = expressionModel;
        this.expressionWriter = expressionWriter;
    }
    VariableWriter.prototype.write = function (variable) {
        var text = "";
        // Writing data location text
        var dataLocationText = "";
        if (variable.dataLocation) {
            dataLocationText = " ".concat(variable.dataLocation);
        }
        // Writing value text
        var valueText = "";
        if (variable.expressionValue) {
            var expression = this.expressionModel.execute({
                value: variable.expressionValue,
            });
            var value = this.expressionWriter.write(expression);
            valueText = " = ".concat(value);
        }
        // Writing final text
        text += "".concat(variable.type).concat(dataLocationText, " ").concat(variable.name).concat(valueText);
        return text;
    };
    VariableWriter = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("ExpressionModel")),
        __param(1, (0, tsyringe_1.inject)("ExpressionWriter")),
        __metadata("design:paramtypes", [Object, Object])
    ], VariableWriter);
    return VariableWriter;
}());
exports.default = VariableWriter;
