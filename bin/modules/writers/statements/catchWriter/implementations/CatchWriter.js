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
var CatchWriter = /** @class */ (function () {
    function CatchWriter(inputWriter) {
        this.inputWriter = inputWriter;
    }
    CatchWriter.prototype._init = function (contentWriter) {
        this.contentWriter = contentWriter;
    };
    CatchWriter.prototype.write = function (_catch) {
        // Writing parameters
        var parametersText = this.inputWriter.write(_catch.parameters);
        // Writing content
        var contentText = this.contentWriter.write(_catch.content);
        // Writing final text
        var text = "catch ".concat(_catch.identifier || "", "(").concat(parametersText, "){\n").concat(contentText, "}");
        return text;
    };
    CatchWriter = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("InputWriter")),
        __metadata("design:paramtypes", [Object])
    ], CatchWriter);
    return CatchWriter;
}());
exports.default = CatchWriter;
