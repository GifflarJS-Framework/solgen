"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __importDefault(require("../../../../../utils/helpers"));
var EventCallWriter = /** @class */ (function () {
    function EventCallWriter() {
    }
    EventCallWriter.prototype.write = function (event) {
        var text = "emit ".concat(event.name, "(").concat(helpers_1.default.getCommaExpression(event.variables), ")");
        return text;
    };
    return EventCallWriter;
}());
exports.default = EventCallWriter;
