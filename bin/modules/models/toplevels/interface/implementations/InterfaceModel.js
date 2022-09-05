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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var helpers_1 = __importDefault(require("../../../../../utils/helpers"));
var InterfaceModel = /** @class */ (function () {
    function InterfaceModel(contractBodyModel, inheritsModel, functionModel) {
        this.contractBodyModel = contractBodyModel;
        this.inheritsModel = inheritsModel;
        this.functionModel = functionModel;
    }
    InterfaceModel.prototype.execute = function (interfaceName) {
        var _this = this;
        // Body of the interface (almost same as contract)
        var contractBody = this.contractBodyModel.execute();
        // Removing some unused statements in interfaces
        var _a = contractBody.body, variables = _a.variables, mappings = _a.mappings, usings = _a.usings, interfaceBody = __rest(_a, ["variables", "mappings", "usings"]);
        // Creating interface model
        var _interface = __assign({ name: interfaceName, inherits: [] }, interfaceBody);
        var setInheritance = function (identifier, args) {
            var inherits = _this.inheritsModel.execute({ identifier: identifier, args: args });
            if (!_interface.inherits)
                _interface.inherits = [];
            _interface.inherits.push(inherits);
            return inherits;
        };
        var createFunction = function (name, inputs, outputs, stateMutability) {
            if (inputs === void 0) { inputs = []; }
            if (outputs === void 0) { outputs = []; }
            var _function = _this.functionModel.execute({
                name: name,
                scope: "external",
                inputs: helpers_1.default.castITypeNameInputsToInputs(inputs),
                outputs: helpers_1.default.castITypeNameOutputsToOutputs(outputs),
                isConstructor: false,
                stateMutability: stateMutability,
            });
            if (!_interface.functions)
                _interface.functions = [];
            _interface.functions.push(_function);
            return _function;
        };
        var toJson = function () {
            var json = JSON.stringify({ interface: _interface });
            return JSON.parse(json);
        };
        var _assignFunctions = function () {
            var _obj = {
                interface: _interface,
                code: "",
                json: {},
                setInheritance: setInheritance,
                createEvent: contractBody.createEvent,
                createFunction: createFunction,
                toJson: toJson,
                toString: function () {
                    return JSON.stringify({ interface: _obj.interface });
                },
            };
            return _obj;
        };
        var json = _assignFunctions();
        return json;
    };
    InterfaceModel = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("ContractBodyModel")),
        __param(1, (0, tsyringe_1.inject)("InheritsModel")),
        __param(2, (0, tsyringe_1.inject)("FunctionModel")),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], InterfaceModel);
    return InterfaceModel;
}());
exports.default = InterfaceModel;
