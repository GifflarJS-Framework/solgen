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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __importDefault(require("../../../../../utils/helpers"));
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
    FunctionWriter.prototype.write = function (functions, options) {
        var _this = this;
        var text = "//FUNCTIONS\n";
        functions.map(function (f) {
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
            text_returns += _this.outputWriter.write(f.outputs);
            // Organizing state mutability
            var stateMutability = "";
            if (f.stateMutability) {
                stateMutability = " ".concat(f.stateMutability);
            }
            // Override text
            var txt_override = "";
            if (f.overrides)
                txt_override = " override";
            // Virtual text
            var txt_virtual = "";
            if (f.virtual)
                txt_virtual = " virtual";
            // Closing inputs and setting scope
            text += ")".concat(scope).concat(stateMutability).concat(txt_override).concat(txt_virtual);
            if (!options || !options.onlyPrototype) {
                // Organizing all modifiers
                var txt_modifiers_1 = "";
                if (f.modifiers) {
                    f.modifiers.map(function (modifier) {
                        txt_modifiers_1 += " ".concat(modifier.name);
                        if (modifier.args.length) {
                            // Modifier args
                            txt_modifiers_1 += "(".concat(helpers_1.default.getCommaExpression(modifier.args), ")");
                        }
                        return modifier;
                    });
                }
                // Setting modifiers to main text
                text += "".concat(txt_modifiers_1);
            }
            // Setting the returns text
            if (text_returns) {
                text += " ".concat(text_returns);
            }
            if (options && options.onlyPrototype) {
                text += ";\n";
            }
            else {
                // Opening the content clousure
                text += "{\n";
                // Writing function content
                text += _this.contentWriter.write(f.content);
                // Closing the function
                text += "}\n\n";
            }
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
