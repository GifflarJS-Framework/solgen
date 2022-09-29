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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var helpers_1 = __importDefault(require("../../../../../utils/helpers"));
var ContractModel = /** @class */ (function () {
    function ContractModel(functionModel, inheritsModel, contractBodyModel, fallbackModel, receiveModel) {
        this.functionModel = functionModel;
        this.inheritsModel = inheritsModel;
        this.contractBodyModel = contractBodyModel;
        this.fallbackModel = fallbackModel;
        this.receiveModel = receiveModel;
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
            if (!contract.inherits)
                contract.inherits = [];
            contract.inherits.push(inherits);
            return inherits;
        };
        var createFallback = function (options) {
            var fallback = _this.fallbackModel.execute({
                isPayable: options === null || options === void 0 ? void 0 : options.isPayable,
                modifiers: options === null || options === void 0 ? void 0 : options.modifiers,
                overrides: options === null || options === void 0 ? void 0 : options.overrides,
                virtual: options === null || options === void 0 ? void 0 : options.virtual,
                stateVars: contract.variables || [],
            });
            contract.fallback = fallback;
            return fallback;
        };
        var createReceive = function (options) {
            var receive = _this.receiveModel.execute({
                stateVars: (contract === null || contract === void 0 ? void 0 : contract.variables) || [],
                modifiers: options === null || options === void 0 ? void 0 : options.modifiers,
                overrides: options === null || options === void 0 ? void 0 : options.overrides,
                virtual: options === null || options === void 0 ? void 0 : options.virtual,
            });
            contract.receive = receive;
            return receive;
        };
        var createConstructor = function (inputs, options) {
            if (inputs === void 0) { inputs = []; }
            var _function = _this.functionModel.execute({
                name: "",
                scope: "public",
                isConstructor: true,
                inputs: helpers_1.default.castITypeNameInputsToInputs(inputs),
                stateVars: contract.variables,
                overrides: options === null || options === void 0 ? void 0 : options.overrides,
                virtual: options === null || options === void 0 ? void 0 : options.virtual,
                modifiers: options === null || options === void 0 ? void 0 : options.modifiers,
            });
            if (!contract.functions)
                contract.functions = [];
            contract.functions.push(_function);
            return _function;
        };
        var _assignFunctions = function () {
            var _obj = __assign(__assign({ contract: contract, code: "", json: {}, instance: undefined, toJson: toJson }, contractBody), { createConstructor: createConstructor, setInheritance: setInheritance, createFallback: createFallback, createReceive: createReceive, toString: function () {
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
        __param(3, (0, tsyringe_1.inject)("FallbackModel")),
        __param(4, (0, tsyringe_1.inject)("ReceiveModel")),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
    ], ContractModel);
    return ContractModel;
}());
exports.default = ContractModel;
