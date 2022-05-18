"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IfModel = /** @class */ (function () {
    function IfModel() {
    }
    IfModel.prototype.execute = function (_a) {
        var _b = _a.condition, condition = _b === void 0 ? "" : _b, _c = _a.onElse, onElse = _c === void 0 ? false : _c;
        var _if = {
            statement: "if",
            else: onElse || false,
            condition: condition || "",
            content: [],
        };
        return _if;
    };
    return IfModel;
}());
exports.default = IfModel;
