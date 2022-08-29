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
var ModifierWriter = /** @class */ (function () {
    function ModifierWriter(contentWriter, inputWriter) {
        this.contentWriter = contentWriter;
        this.inputWriter = inputWriter;
    }
    ModifierWriter.prototype.write = function (modifiers) {
        var _this = this;
        var text = "";
        modifiers.map(function (modifier) {
            var str = "modifier ".concat(modifier.title);
            // Defining args if any
            if (modifier.args.length > 0) {
                var argsStr = _this.inputWriter.write(modifier.args);
                // Defining the modifier content
                str = str.concat("(".concat(argsStr, ")"));
            }
            // If virtual
            if (modifier.isVirtual) {
                str = str.concat(" virtual");
            }
            // If overriding
            if (modifier.isOverriding) {
                str = str.concat(" override");
            }
            // Defining the modifier content
            var contentStr = _this.contentWriter.write(modifier.content);
            str = str.concat("{\n");
            str = str.concat("".concat(contentStr));
            str = str.concat("_;\n}");
            // Updating complete text
            text = text.concat("".concat(str, "\n\n"));
        });
        return text;
    };
    ModifierWriter = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("ContentWriter")),
        __param(1, (0, tsyringe_1.inject)("InputWriter")),
        __metadata("design:paramtypes", [Object, Object])
    ], ModifierWriter);
    return ModifierWriter;
}());
exports.default = ModifierWriter;
