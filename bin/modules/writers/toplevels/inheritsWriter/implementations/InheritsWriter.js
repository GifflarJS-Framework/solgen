"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __importDefault(require("../../../../../utils/helpers"));
var InheritsWriter = /** @class */ (function () {
    function InheritsWriter() {
    }
    InheritsWriter.prototype.write = function (inheritances) {
        var texts = [];
        inheritances.map(function (inherits) {
            // Writing identifier
            var txt_identifier = "".concat(inherits.identifier);
            // Writing args if any
            var txt_args = helpers_1.default.getCommaExpression(inherits.args || []);
            // Final individual inherits text
            var txt_inherits = txt_args
                ? "".concat(txt_identifier, "(").concat(txt_args, ")")
                : "".concat(txt_identifier);
            // Including to write the final text
            texts.push(txt_inherits);
        });
        // Writing final text
        var text = helpers_1.default.getCommaExpression(texts);
        if (!text)
            return "";
        return "is ".concat(text);
    };
    return InheritsWriter;
}());
exports.default = InheritsWriter;
