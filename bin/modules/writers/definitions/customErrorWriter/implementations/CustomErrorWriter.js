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
var CustomErrorWriter = /** @class */ (function () {
    function CustomErrorWriter(inputWriter) {
        this.inputWriter = inputWriter;
    }
    CustomErrorWriter.prototype.write = function (customErrors) {
        var _this = this;
        var text = "";
        customErrors.map(function (customError) {
            var customErrorText = "error ".concat(customError.name, "(");
            customErrorText = customErrorText.concat("".concat(_this.inputWriter.write(customError.args, true), ");\n"));
            text = text.concat(customErrorText);
        });
        if (customErrors.length) {
            text = text.concat("\n");
        }
        return text;
    };
    CustomErrorWriter = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("InputWriter")),
        __metadata("design:paramtypes", [Object])
    ], CustomErrorWriter);
    return CustomErrorWriter;
}());
exports.default = CustomErrorWriter;
