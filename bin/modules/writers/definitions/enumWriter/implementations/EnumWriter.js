"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __importDefault(require("../../../../../utils/helpers"));
var EnumWriter = /** @class */ (function () {
    function EnumWriter() {
    }
    EnumWriter.prototype.write = function (_enums) {
        var text = "";
        _enums.map(function (_enum) {
            var enumIdentifiersOptionsText = helpers_1.default.getCommaExpression(_enum.identifiersOptions);
            var enumText = "enum ".concat(_enum.identifier, "{").concat(enumIdentifiersOptionsText, "}\n");
            text += enumText;
        });
        return text;
    };
    return EnumWriter;
}());
exports.default = EnumWriter;
