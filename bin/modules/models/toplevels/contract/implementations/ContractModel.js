"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var ContractModel = /** @class */ (function () {
    function ContractModel(functionModel, inheritsModel, contractBodyModel) {
        this.functionModel = functionModel;
        this.inheritsModel = inheritsModel;
        this.contractBodyModel = contractBodyModel;
    }
    ContractModel.prototype.execute = function (contractName) {
        var _this = this;
        // Body of the contract
        var contractBody = this.contractBodyModel.execute();
        var contract = __assign({ name: contractName, inherits: [] }, contractBody.body);
        var toJson = function () {
            var json = JSON.stringify({ contract: contract });
            return JSON.parse(json);
        };
        var setInheritance = function (identifier, args) {
            var inherits = _this.inheritsModel.execute({ identifier: identifier, args: args });
            contract.inherits.push(inherits);
            return inherits;
        };
        var createConstructor = function (scope, inputs, outputs) {
            var _function = _this.functionModel.execute({
                name: "",
                scope: scope,
                isConstructor: true,
                inputs: inputs,
                outputs: outputs,
                stateVars: contract.variables,
            });
            contract.functions.push(_function);
            return _function;
        };
        var _assignFunctions = function () {
            var _obj = __assign(__assign({ contract: contract, code: "", json: {}, instance: undefined, toJson: toJson }, contractBody), { createConstructor: createConstructor, setInheritance: setInheritance, toString: function () {
                    return JSON.stringify({ contract: _obj.contract });
                } });
            return _obj;
        };
        var json = _assignFunctions();
        return json;
    };
    ContractModel = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("FunctionModel")),
        __param(1, (0, tsyringe_1.inject)("InheritsModel")),
        __param(2, (0, tsyringe_1.inject)("ContractBodyModel")),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], ContractModel);
    return ContractModel;
}());
exports.default = ContractModel;
