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
var ReceiveWriter = /** @class */ (function () {
    function ReceiveWriter(contentWriter) {
        this.contentWriter = contentWriter;
    }
    ReceiveWriter.prototype.write = function (receive) {
        var txt_content = this.contentWriter.write(receive.content);
        // Override text
        var txt_override = "";
        if (receive.overrides)
            txt_override = " override";
        // Virtual text
        var txt_virtual = "";
        if (receive.virtual)
            txt_virtual = " virtual";
        // Preparing modifiers text
        var txt_modifiers = "";
        if (receive.modifiers) {
            receive.modifiers.map(function (modifier) {
                // Modifier name
                txt_modifiers += " ".concat(modifier.name);
                // Modifier args
                if (modifier.args) {
                    txt_modifiers += "(".concat(helpers_1.default.getCommaExpression(modifier.args), ")");
                }
            });
        }
        var text = "receive() external payable".concat(txt_override).concat(txt_virtual).concat(txt_modifiers, "{\n").concat(txt_content, "}\n\n");
        return text;
    };
    ReceiveWriter = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("ContentWriter")),
        __metadata("design:paramtypes", [Object])
    ], ReceiveWriter);
    return ReceiveWriter;
}());
exports.default = ReceiveWriter;
