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
var ContentModel = /** @class */ (function () {
    function ContentModel(assignmnetModel, expressionModel, variableModel, newContractModel, ifModel, methodCallModel, eventCallModel) {
        this.assignmnetModel = assignmnetModel;
        this.expressionModel = expressionModel;
        this.variableModel = variableModel;
        this.newContractModel = newContractModel;
        this.ifModel = ifModel;
        this.methodCallModel = methodCallModel;
        this.eventCallModel = eventCallModel;
    }
    ContentModel.prototype.execute = function (_a) {
        var _this = this;
        var _b = _a.globalVars, globalVars = _b === void 0 ? [] : _b;
        var contentVars = [].concat(Object.assign(globalVars));
        var stack = [
            {
                content: [],
            },
        ];
        var top = 0;
        var setVariable = function (type, name, value) {
            var newVariable = _this.variableModel.execute({ type: type, name: name, value: value });
            contentVars.push(newVariable);
            stack[top].content.push(newVariable);
            var contentItem = _assignFunctions(stack[top]);
            return contentItem;
        };
        var setMethodCall = function (variable, method, value) {
            var newMethodCall = _this.methodCallModel.execute({
                variable: variable,
                method: method,
                value: value,
            });
            stack[top].content.push(newMethodCall);
            var contentItem = _assignFunctions(stack[top]);
            return contentItem;
        };
        var setAssignment = function (variable, expression) {
            var expressionModel = _this.expressionModel.execute({
                value: expression,
            });
            var newAssignment = _this.assignmnetModel.execute({
                variable: variable,
                value: expressionModel,
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
        var setContractVariable = function (variable, contractName, args) {
            var newContract = _this.newContractModel.execute({ contractName: contractName, args: args });
            return setVariable(contractName, variable, newContract);
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
        var endIf = function () {
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
        var _assignFunctions = function (obj) {
            var _obj = __assign(__assign({}, obj), { beginIf: beginIf, beginElse: beginElse, beginElseIf: beginElseIf, endIf: endIf, endElseIf: endIf, endElse: endIf, setEventCall: setEventCall, setAssignment: setAssignment, setVariable: setVariable, setMethodCall: setMethodCall, setContractVariable: setContractVariable });
            return _obj;
        };
        var json = _assignFunctions(stack[top]);
        return json;
    };
    ContentModel = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("AssignmentModel")),
        __param(1, (0, tsyringe_1.inject)("ExpressionModel")),
        __param(2, (0, tsyringe_1.inject)("VariableModel")),
        __param(3, (0, tsyringe_1.inject)("NewContractModel")),
        __param(4, (0, tsyringe_1.inject)("IfModel")),
        __param(5, (0, tsyringe_1.inject)("MethodCallModel")),
        __param(6, (0, tsyringe_1.inject)("EventCallModel")),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object])
    ], ContentModel);
    return ContentModel;
}());
exports.default = ContentModel;
