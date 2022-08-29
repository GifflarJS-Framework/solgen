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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __importDefault(require("../../../../../utils/helpers"));
var tsyringe_1 = require("tsyringe");
var ContractBodyModel = /** @class */ (function () {
    function ContractBodyModel(stateVariableModel, functionModel, eventModel, usingModel) {
        this.stateVariableModel = stateVariableModel;
        this.functionModel = functionModel;
        this.eventModel = eventModel;
        this.usingModel = usingModel;
    }
    ContractBodyModel.prototype.execute = function () {
        var _this = this;
        var body = {
            usings: [],
            variables: [],
            mappings: [],
            events: [],
            modifiers: [],
            customErrors: [],
            functions: [],
        };
        var createUsing = function (identifier, type) {
            var using = _this.usingModel.execute({
                identifier: identifier,
                type: helpers_1.default.writeTypeName(type),
            });
            body.usings.push(using);
            return using;
        };
        var createEvent = function (name, inputs) {
            var event = _this.eventModel.execute({ name: name, inputs: inputs });
            body.events.push(event);
            return event;
        };
        var createVariable = function (type, name, scope, value) {
            var variable = _this.stateVariableModel.execute({
                type: helpers_1.default.writeTypeName(type),
                name: name,
                scope: scope,
                value: value,
            });
            body.variables.push(variable);
            return variable;
        };
        var createFunction = function (name, scope, inputs, outputs, stateMutability) {
            var _function = _this.functionModel.execute({
                name: name,
                scope: scope,
                inputs: inputs,
                outputs: outputs,
                isConstructor: false,
                stateVars: body.variables,
                stateMutability: stateMutability,
            });
            body.functions.push(_function);
            return _function;
        };
        var _assignFunctions = function () {
            var _obj = {
                body: body,
                createUsing: createUsing,
                createEvent: createEvent,
                createVariable: createVariable,
                createFunction: createFunction,
            };
            return _obj;
        };
        var json = _assignFunctions();
        return json;
    };
    ContractBodyModel = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("StateVariableModel")),
        __param(1, (0, tsyringe_1.inject)("FunctionModel")),
        __param(2, (0, tsyringe_1.inject)("EventModel")),
        __param(3, (0, tsyringe_1.inject)("UsingModel")),
        __metadata("design:paramtypes", [Object, Object, Object, Object])
    ], ContractBodyModel);
    return ContractBodyModel;
}());
exports.default = ContractBodyModel;
