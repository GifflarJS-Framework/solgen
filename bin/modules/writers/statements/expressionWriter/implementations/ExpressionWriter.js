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
var ExpressionWriter = /** @class */ (function () {
    function ExpressionWriter(newContractModel, newContractWriter) {
        this.newContractModel = newContractModel;
        this.newContractWriter = newContractWriter;
    }
    ExpressionWriter.prototype.write = function (expression) {
        var _a, _b;
        var text = (_a = expression.value) === null || _a === void 0 ? void 0 : _a.customExpression;
        // If value is the creation of a new contract
        if ((_b = expression.value) === null || _b === void 0 ? void 0 : _b.newContract) {
            var newContract = this.newContractModel.execute(expression.value.newContract);
            text = this.newContractWriter.write(newContract);
        }
        return text || "";
    };
    ExpressionWriter = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("NewContractModel")),
        __param(1, (0, tsyringe_1.inject)("NewContractWriter")),
        __metadata("design:paramtypes", [Object, Object])
    ], ExpressionWriter);
    return ExpressionWriter;
}());
exports.default = ExpressionWriter;
