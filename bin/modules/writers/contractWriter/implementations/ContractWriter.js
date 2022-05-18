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
var ContractWriter = /** @class */ (function () {
    function ContractWriter(eventWriter, functionWriter, globalVariableWriter) {
        this.eventWriter = eventWriter;
        this.functionWriter = functionWriter;
        this.globalVariableWriter = globalVariableWriter;
    }
    ContractWriter.prototype._start = function (contract_name) {
        // Initing the contract
        var text = "contract ".concat(contract_name, "{\n");
        return text;
    };
    ContractWriter.prototype._close = function () {
        // Closing contract definition
        var text = "}";
        return text;
    };
    ContractWriter.prototype.write = function (contracts, callback) {
        var _this = this;
        if (!contracts) {
            return "";
        }
        // Writing the compiler version
        var version = "pragma solidity 0.5.17;\n\n";
        var text = "";
        var contractText;
        contracts.map(function (json, index) {
            contractText = "";
            var txt_start = _this._start(json.name);
            var functions = json.contract.functions;
            var txt_variables = _this.globalVariableWriter.write(json.contract.variables, function (request) {
                functions = functions.concat(request.functions);
            });
            var txt_events = _this.eventWriter.write(json.contract.events);
            var txt_functions = _this.functionWriter.write(functions, json.contract.variables);
            var txt_close = _this._close();
            contractText += "".concat(txt_start + txt_variables + txt_events + txt_functions + txt_close, "\n\n");
            text += contractText;
            if (callback && typeof callback === "function") {
                callback(version + contractText, index);
            }
            return text;
        });
        text = version + text;
        return text;
    };
    ContractWriter = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("EventWriter")),
        __param(1, (0, tsyringe_1.inject)("FunctionWriter")),
        __param(2, (0, tsyringe_1.inject)("GlobalVariableWriter")),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], ContractWriter);
    return ContractWriter;
}());
exports.default = ContractWriter;
