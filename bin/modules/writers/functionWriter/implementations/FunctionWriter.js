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
var FunctionWriter = /** @class */ (function () {
    function FunctionWriter(contentWriter, inputWriter, outputWriter) {
        this.contentWriter = contentWriter;
        this.inputWriter = inputWriter;
        this.outputWriter = outputWriter;
    }
    FunctionWriter.prototype._selectFunctionVariables = function (func) {
        var localVariables = func.content.filter(function (item) {
            return item.statement === "variable";
        });
        return localVariables;
    };
    FunctionWriter.prototype.write = function (functions, variables) {
        var _this = this;
        var text = "//FUNCTIONS\n";
        functions.map(function (f) {
            var localVariables = _this._selectFunctionVariables(f);
            var concatenedVariables = Array.prototype.concat(variables, localVariables);
            // const outputWriter = this.outputWriter.write(concatenedVariables);
            var text_return = "";
            var text_returns = "";
            var scope = " ".concat(f.scope);
            // Verifying whether is a constructor or not
            // Opening the inputs clousure
            if (f.isConstructor) {
                text += "constructor(";
            }
            else {
                text += "function ".concat(f.name, "(");
            }
            // Writing the inputs
            text += _this.inputWriter.write(f.inputs);
            // Requiring outputs
            text_return += _this.outputWriter.write(f.outputs, concatenedVariables, function (_a) {
                var _text_returns = _a.text_returns;
                text_returns = _text_returns;
            });
            // Organizing all modifiers
            var modifiers = "";
            if (f.modifiers) {
                f.modifiers.map(function (modifier) {
                    modifiers += " ".concat(modifier);
                    return modifier;
                });
            }
            // Closing inputs and setting scope
            text += ")".concat(scope).concat(modifiers);
            // Setting the returns text
            if (text_returns) {
                text += " ".concat(text_returns, " ");
            }
            // Opening the content clousure
            text += "{\n";
            // Writing function content
            text += _this.contentWriter.write(f.content);
            // Setting the return values
            text += text_return;
            // Closing the function
            text += "}\n\n";
            return text;
        });
        return text;
    };
    FunctionWriter = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("ContentWriter")),
        __param(1, (0, tsyringe_1.inject)("InputWriter")),
        __param(2, (0, tsyringe_1.inject)("OutputWriter")),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], FunctionWriter);
    return FunctionWriter;
}());
exports.default = FunctionWriter;
