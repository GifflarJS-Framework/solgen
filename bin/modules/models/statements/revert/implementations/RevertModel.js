"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RevertModel = /** @class */ (function () {
    function RevertModel() {
    }
    RevertModel.prototype.execute = function (data) {
        if (data && data.message) {
            // Revert with message `revert("message");`
            var revert = {
                statement: "revert",
                message: data.message,
            };
            return revert;
        }
        else if (data && data.customErrorCall) {
            // Revert with event call `revert Unauthorized();`
            var revert = {
                statement: "revert",
                customErrorCall: {
                    customErrorName: data.customErrorCall.customErrorName,
                    args: data.customErrorCall.args || [],
                },
            };
            return revert;
        }
        else {
            // Revert without args `revert()`
            var revert = {
                statement: "revert",
            };
            return revert;
        }
    };
    return RevertModel;
}());
exports.default = RevertModel;
