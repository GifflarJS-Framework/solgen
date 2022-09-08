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
/* eslint-disable no-use-before-define */
var helpers_1 = __importDefault(require("../../../../../utils/helpers"));
var tsyringe_1 = require("tsyringe");
var ContentModel = /** @class */ (function () {
    function ContentModel(assertModel, breakModel, catchModel, assignmnetModel, variableModel, ifModel, methodCallModel, eventCallModel, continueModel, doWhileModel, returnModel, forModel, mappingModel, requireModel, revertModel, tryModel, whileModel) {
        this.assertModel = assertModel;
        this.breakModel = breakModel;
        this.catchModel = catchModel;
        this.assignmnetModel = assignmnetModel;
        this.variableModel = variableModel;
        this.ifModel = ifModel;
        this.methodCallModel = methodCallModel;
        this.eventCallModel = eventCallModel;
        this.continueModel = continueModel;
        this.doWhileModel = doWhileModel;
        this.returnModel = returnModel;
        this.forModel = forModel;
        this.mappingModel = mappingModel;
        this.requireModel = requireModel;
        this.revertModel = revertModel;
        this.tryModel = tryModel;
        this.whileModel = whileModel;
    }
    ContentModel.prototype.execute = function (_a) {
        var _this = this;
        var _b = _a.stateVars, stateVars = _b === void 0 ? [] : _b;
        var contentVars = [].concat(Object.assign(stateVars));
        var stack = [
            {
                content: [],
            },
        ];
        var top = 0;
        var setAssert = function (condition) {
            var _assert = _this.assertModel.execute({ condition: condition });
            stack[top].content.push(_assert);
            var contentItem = _assignFunctions(stack[top]);
            return contentItem;
        };
        var setBreak = function () {
            var _break = _this.breakModel.execute();
            stack[top].content.push(_break);
            var contentItem = _assignFunctions(stack[top]);
            return contentItem;
        };
        var setTry = function (parameters, expression) {
            // Casting ITypeNameInput to IInput
            var _parameters = helpers_1.default.castITypeNameInputsToInputs(parameters);
            var _catch = _this.tryModel.execute({
                parameters: _parameters,
                expression: expression,
            });
            stack[top].content.push(_catch);
            var contentItem = _assignFunctions(stack[top]);
            return contentItem;
        };
        var setCatch = function (parameters, identifier) {
            // Casting ITypeNameInput to IInput
            var _parameters = helpers_1.default.castITypeNameInputsToInputs(parameters);
            var _catch = _this.catchModel.execute({
                identifier: identifier,
                parameters: _parameters,
            });
            stack[top].content.push(_catch);
            var contentItem = _assignFunctions(stack[top]);
            return contentItem;
        };
        var setVariable = function (type, name, expression) {
            var newVariable = _this.variableModel.execute({
                type: helpers_1.default.writeTypeName(type),
                name: name,
                expressionValue: expression,
            });
            contentVars.push(newVariable);
            stack[top].content.push(newVariable);
            var contentItem = _assignFunctions(stack[top]);
            return contentItem;
        };
        var setMethodCall = function (variable, method, args) {
            var newMethodCall = _this.methodCallModel.execute({
                variable: variable,
                method: method,
                args: args,
            });
            stack[top].content.push(newMethodCall);
            var contentItem = _assignFunctions(stack[top]);
            return contentItem;
        };
        var setAssignment = function (variable, expressionValue) {
            var newAssignment = _this.assignmnetModel.execute({
                variable: variable,
                expressionValue: expressionValue,
            });
            stack[top].content.push(newAssignment);
            var contentItem = _assignFunctions(stack[top]);
            return contentItem;
        };
        var setEventCall = function (name, inputNames) {
            var newEventCall = _this.eventCallModel.execute({
                name: name,
                variables: inputNames,
            });
            stack[top].content.push(newEventCall);
            var contentItem = _assignFunctions(stack[top]);
            return contentItem;
        };
        var setContinue = function () {
            var _continue = _this.continueModel.execute();
            stack[top].content.push(_continue);
            var contentItem = _assignFunctions(stack[top]);
            return contentItem;
        };
        var setReturn = function (expressions) {
            var _return = _this.returnModel.execute({ expressions: expressions });
            stack[top].content.push(_return);
            var contentItem = _assignFunctions(stack[top]);
            return contentItem;
        };
        var setMapping = function (type, typeName, name) {
            var _mapping = _this.mappingModel.execute({ type: type, typeName: typeName, name: name });
            stack[top].content.push(_mapping);
            var contentItem = _assignFunctions(stack[top]);
            return contentItem;
        };
        var setRequire = function (condition, errorMessage) {
            var _require = _this.requireModel.execute({ condition: condition, errorMessage: errorMessage });
            stack[top].content.push(_require);
            var contentItem = _assignFunctions(stack[top]);
            return contentItem;
        };
        var setRevert = function (errorDefinition) {
            var _revert = _this.revertModel.execute({
                message: errorDefinition.message,
            });
            stack[top].content.push(_revert);
            var contentItem = _assignFunctions(stack[top]);
            return contentItem;
        };
        // Decision and loop structures
        var beginFor = function (variable, condition, expressionValue) {
            var newFor = _this.forModel.execute({
                variable: {
                    statement: "variable",
                    type: helpers_1.default.writeTypeName(variable.type),
                    name: variable.name,
                    expressionValue: variable.expression,
                    dataLocation: variable.dataLocation,
                },
                condition: condition,
                expressionValue: expressionValue,
            });
            var newForContent = _assignFunctions(newFor);
            stack.push(newForContent);
            top += 1;
            return newForContent;
        };
        var beginDoWhile = function (condition) {
            var newDoWhile = _this.doWhileModel.execute({ condition: condition });
            var newDoWhileContent = _assignFunctions(newDoWhile);
            stack.push(newDoWhileContent);
            top += 1;
            return newDoWhileContent;
        };
        var beginWhile = function (condition) {
            var newWhile = _this.whileModel.execute({ condition: condition });
            var newWhileContent = _assignFunctions(newWhile);
            stack.push(newWhileContent);
            top += 1;
            return newWhileContent;
        };
        var beginIf = function (condition, onElse) {
            var newIf = _this.ifModel.execute({ condition: condition, onElse: onElse });
            var newIfContent = _assignFunctions(newIf);
            stack.push(newIfContent);
            top += 1;
            return newIfContent;
        };
        var beginElseIf = function (condition) {
            if (!condition) {
                throw new Error("Condition cannot be ommited.");
            }
            return beginIf(condition, true);
        };
        var beginElse = function () {
            return beginIf("", true);
        };
        var _endDecisionStructure = function () {
            if (stack.length > 1) {
                var json_1 = stack.pop();
                top -= 1;
                if (json_1) {
                    stack[top].content.push(json_1);
                }
            }
            var contentItem = _assignFunctions(stack[top]);
            return contentItem;
        };
        var _c = Array(6).fill(_endDecisionStructure), endIf = _c[0], endElse = _c[1], endElseIf = _c[2], endDoWhile = _c[3], endWhile = _c[4], endFor = _c[5];
        var _assignFunctions = function (obj) {
            var _obj = __assign(__assign({}, obj), { beginIf: beginIf, beginElse: beginElse, beginElseIf: beginElseIf, beginDoWhile: beginDoWhile, beginFor: beginFor, endIf: endIf, endElseIf: endElseIf, endElse: endElse, endDoWhile: endDoWhile, endFor: endFor, endWhile: endWhile, setEventCall: setEventCall, setAssignment: setAssignment, setVariable: setVariable, setMethodCall: setMethodCall, setContinue: setContinue, setReturn: setReturn, setAssert: setAssert, setBreak: setBreak, setCatch: setCatch, setMapping: setMapping, setRequire: setRequire, setRevert: setRevert, setTry: setTry, beginWhile: beginWhile });
            return _obj;
        };
        var json = _assignFunctions(stack[top]);
        return json;
    };
    ContentModel = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("AssertModel")),
        __param(1, (0, tsyringe_1.inject)("BreakModel")),
        __param(2, (0, tsyringe_1.inject)("CatchModel")),
        __param(3, (0, tsyringe_1.inject)("AssignmentModel")),
        __param(4, (0, tsyringe_1.inject)("VariableModel")),
        __param(5, (0, tsyringe_1.inject)("IfModel")),
        __param(6, (0, tsyringe_1.inject)("MethodCallModel")),
        __param(7, (0, tsyringe_1.inject)("EventCallModel")),
        __param(8, (0, tsyringe_1.inject)("ContinueModel")),
        __param(9, (0, tsyringe_1.inject)("DoWhileModel")),
        __param(10, (0, tsyringe_1.inject)("ReturnModel")),
        __param(11, (0, tsyringe_1.inject)("ForModel")),
        __param(12, (0, tsyringe_1.inject)("MappingModel")),
        __param(13, (0, tsyringe_1.inject)("RequireModel")),
        __param(14, (0, tsyringe_1.inject)("RevertModel")),
        __param(15, (0, tsyringe_1.inject)("TryModel")),
        __param(16, (0, tsyringe_1.inject)("WhileModel")),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object])
    ], ContentModel);
    return ContentModel;
}());
exports.default = ContentModel;
