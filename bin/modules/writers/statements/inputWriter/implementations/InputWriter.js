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
var InputWriter = /** @class */ (function () {
    function InputWriter() {
    }
    InputWriter.prototype.write = function (inputs, typeon) {
        if (typeon === void 0) { typeon = true; }
        var text = "";
        var _inputs = __spreadArray([], inputs, true);
        var memoryList = ["string"];
        // If there are no inputs
        if (!_inputs.length) {
            return text;
        }
        // Defining the first input
        var firstinput = _inputs[0];
        if (typeon) {
            text += "".concat(firstinput.type, " ");
            if (memoryList.includes(firstinput.type)) {
                text += "memory ";
            }
        }
        text += firstinput.name;
        // Removing the first element
        _inputs.shift();
        // Defining the other inputs
        _inputs.map(function (input) {
            text += ", ";
            if (typeon) {
                text += "".concat(input.type, " ");
                if (memoryList.includes(input.type)) {
                    text += "memory ";
                }
            }
            text += input.name;
            return text;
        });
        return text;
    };
    return InputWriter;
}());
exports.default = InputWriter;
