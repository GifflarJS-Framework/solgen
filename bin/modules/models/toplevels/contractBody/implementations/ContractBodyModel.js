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
    function ContractBodyModel(stateVariableModel, functionModel, eventModel, usingModel, modifierModel, customErrorModel, stateMappingModel, enumModel, structModel) {
        this.stateVariableModel = stateVariableModel;
        this.functionModel = functionModel;
        this.eventModel = eventModel;
        this.usingModel = usingModel;
        this.modifierModel = modifierModel;
        this.customErrorModel = customErrorModel;
        this.stateMappingModel = stateMappingModel;
        this.enumModel = enumModel;
        this.structModel = structModel;
    }
    ContractBodyModel.prototype.execute = function () {
        var _this = this;
        var body = {
            usings: [],
            structs: [],
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
            if (!body.usings)
                body.usings = [];
            body.usings.push(using);
            return using;
        };
        var createEvent = function (name, inputs) {
            var event = _this.eventModel.execute({ name: name, inputs: inputs });
            if (!body.events)
                body.events = [];
            body.events.push(event);
            return event;
        };
        var createStruct = function (identifier, variables, mappings) {
            var struct = _this.structModel.execute({
                identifier: identifier,
                variables: variables,
                mappings: mappings,
            });
            if (!body.structs)
                body.structs = [];
            body.structs.push(struct);
            return struct;
        };
        var createEnum = function (identifier, identifiersOptions) {
            var _enum = _this.enumModel.execute({ identifier: identifier, identifiersOptions: identifiersOptions });
            if (!body.enums)
                body.enums = [];
            body.enums.push(_enum);
            return _enum;
        };
        var createMapping = function (type, typeName, name, scope) {
            var mapping = _this.stateMappingModel.execute({
                type: type,
                typeName: typeName,
                name: name,
                scope: scope,
            });
            if (!body.mappings)
                body.mappings = [];
            body.mappings.push(mapping);
            return mapping;
        };
        var createCustomError = function (name, args) {
            var customError = _this.customErrorModel.execute({ name: name, args: args });
            if (!body.customErrors)
                body.customErrors = [];
            body.customErrors.push(customError);
            return customError;
        };
        var createModifier = function (title, args, options) {
            var modifier = _this.modifierModel.execute({
                title: title,
                args: args,
                isOverriding: options.isOverriding,
                isVirtual: options.isVirtual,
                stateVars: body.variables,
            });
            if (!body.modifiers)
                body.modifiers = [];
            body.modifiers.push(modifier);
            return modifier;
        };
        var createVariable = function (type, name, scope, value) {
            var variable = _this.stateVariableModel.execute({
                type: helpers_1.default.writeTypeName(type),
                name: name,
                scope: scope,
                value: value,
            });
            if (!body.variables)
                body.variables = [];
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
            if (!body.functions)
                body.functions = [];
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
                createModifier: createModifier,
                createCustomError: createCustomError,
                createMapping: createMapping,
                createEnum: createEnum,
                createStruct: createStruct,
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
        __param(4, (0, tsyringe_1.inject)("ModifierModel")),
        __param(5, (0, tsyringe_1.inject)("CustomErrorModel")),
        __param(6, (0, tsyringe_1.inject)("StateMappingModel")),
        __param(7, (0, tsyringe_1.inject)("EnumModel")),
        __param(8, (0, tsyringe_1.inject)("StructModel")),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object])
    ], ContractBodyModel);
    return ContractBodyModel;
}());
exports.default = ContractBodyModel;
