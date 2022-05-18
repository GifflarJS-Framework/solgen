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
var ContractModel = /** @class */ (function () {
    function ContractModel(globalVariableModel, functionModel, eventCallModel, eventModel) {
        this.globalVariableModel = globalVariableModel;
        this.functionModel = functionModel;
        this.eventCallModel = eventCallModel;
        this.eventModel = eventModel;
    }
    ContractModel.prototype.execute = function (contractName) {
        var _this = this;
        var contract = {
            variables: [],
            events: [],
            functions: [],
        };
        var toJson = function () {
            var jsonfunction = JSON.stringify({ name: contractName, contract: contract });
            return JSON.parse(jsonfunction);
        };
        var createEvent = function (name, inputs) {
            var event = _this.eventModel.execute({ name: name, inputs: inputs });
            contract.events.push(event);
            return event;
        };
        var createEventCall = function (name, variables) {
            var newEventCall = _this.eventCallModel.execute({ name: name, variables: variables });
            return newEventCall;
        };
        var createVariable = function (type, name, scope, value) {
            var variable = _this.globalVariableModel.execute({
                type: type,
                name: name,
                scope: scope,
                value: value,
            });
            if (scope) {
            }
            // else {
            //   variable = createVariableModel({
            //     type,
            //     name,
            //     value,
            //   });
            // }
            contract.variables.push(variable);
            return variable;
        };
        var createConstructor = function (scope, inputs, outputs) {
            var _function = _this.functionModel.execute({
                name: "",
                scope: scope,
                isConstructor: true,
                inputs: inputs,
                outputs: outputs,
                globalVars: contract.variables,
            });
            contract.functions.push(_function);
            return _function;
        };
        var createFunction = function (name, scope, inputs, outputs) {
            var _function = _this.functionModel.execute({
                name: name,
                scope: scope,
                inputs: inputs,
                outputs: outputs,
                isConstructor: false,
                globalVars: contract.variables,
            });
            contract.functions.push(_function);
            return _function;
        };
        var _assignFunctions = function () {
            var _obj = {
                name: contractName,
                contract: contract,
                code: "",
                json: {},
                instance: undefined,
                toJson: toJson,
                createEvent: createEvent,
                createEventCall: createEventCall,
                createVariable: createVariable,
                createConstructor: createConstructor,
                createFunction: createFunction,
                toString: function () {
                    return JSON.stringify({ name: _obj.name, contract: _obj.contract });
                },
            };
            return _obj;
        };
        var json = _assignFunctions();
        return json;
    };
    ContractModel = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("GlobalVariableModel")),
        __param(1, (0, tsyringe_1.inject)("FunctionModel")),
        __param(2, (0, tsyringe_1.inject)("EventCallModel")),
        __param(3, (0, tsyringe_1.inject)("EventModel")),
        __metadata("design:paramtypes", [Object, Object, Object, Object])
    ], ContractModel);
    return ContractModel;
}());
exports.default = ContractModel;
