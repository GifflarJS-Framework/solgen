"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var TryWriter = /** @class */ (function () {
    function TryWriter(newContractWriter, methodCallWriter, inputWriter) {
        this.newContractWriter = newContractWriter;
        this.methodCallWriter = methodCallWriter;
        this.inputWriter = inputWriter;
    }
    TryWriter.prototype._init = function (contentWriter) {
        this.contentWriter = contentWriter;
    };
    TryWriter.prototype.write = function (_try) {
        // Writing expression
        var expressionText = "";
        if (_try.expression.methodCall) {
            expressionText = this.methodCallWriter.write(__assign({ statement: "method_call" }, _try.expression.methodCall));
        }
        else if (_try.expression.newContract) {
            expressionText = this.newContractWriter.write(__assign({ statement: "newcontract" }, _try.expression.newContract));
        }
        else {
            throw new Error("Method call or New contract must be defined in Try statement creation.");
        }
        // Writing parameters
        var parametersText = this.inputWriter.write(_try.parameters);
        // Writing content
        var contentText = this.contentWriter.write(_try.content);
        // Writing final text
        var text = "try ".concat(expressionText, " returns(").concat(parametersText, "){\n").concat(contentText, "}");
        return text;
    };
    TryWriter = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("NewContractWriter")),
        __param(1, (0, tsyringe_1.inject)("MethodCallWriter")),
        __param(2, (0, tsyringe_1.inject)("InputWriter")),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], TryWriter);
    return TryWriter;
}());
exports.default = TryWriter;
