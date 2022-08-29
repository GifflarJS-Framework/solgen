"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NewContractModel = /** @class */ (function () {
    function NewContractModel() {
    }
    NewContractModel.prototype.execute = function (_a) {
        var contractName = _a.contractName, _b = _a.args, args = _b === void 0 ? [] : _b;
        var json = {
            statement: "newcontract",
            contractName: contractName,
            args: args,
        };
        return json;
    };
    return NewContractModel;
}());
exports.default = NewContractModel;
