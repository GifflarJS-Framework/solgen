"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var OutputWriter = /** @class */ (function () {
    function OutputWriter() {
    }
    OutputWriter.prototype.write = function (outputs) {
        var text = "";
        var _outputs = __spreadArray([], outputs, true);
        var memoryList = ["string", "bytes"];
        // If there are no output
        if (!_outputs.length) {
            return text;
        }
        // Defining the first output
        var firstoutput = _outputs[0];
        text += "".concat(firstoutput.type);
        if (memoryList.includes(firstoutput.type)) {
            text += " memory";
        }
        if (firstoutput.name)
            text += " ".concat(firstoutput.name);
        // Removing the first element
        _outputs.shift();
        // Defining the other outputs
        _outputs.map(function (output) {
            text += ", ";
            text += "".concat(output.type);
            if (memoryList.includes(output.type)) {
                text += " memory";
            }
            if (output.name) {
                text += " ".concat(output.name);
            }
            return text;
        });
        return "returns(".concat(text, ")");
    };
    return OutputWriter;
}());
exports.default = OutputWriter;
