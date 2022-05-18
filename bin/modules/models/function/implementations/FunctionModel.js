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
var FunctionModel = /** @class */ (function () {
    function FunctionModel(contentModel) {
        this.contentModel = contentModel;
    }
    FunctionModel.prototype.execute = function (_a) {
        var name = _a.name, scope = _a.scope, _b = _a.isConstructor, isConstructor = _b === void 0 ? false : _b, inputs = _a.inputs, outputs = _a.outputs, _c = _a.globalVars, globalVars = _c === void 0 ? [] : _c;
        var content_json = this.contentModel.execute({ globalVars: globalVars });
        var myFunction = __assign(__assign({ name: name, scope: scope, isConstructor: isConstructor || false, inputs: inputs || [], outputs: outputs || [], modifiers: [] }, content_json), { json: function () {
                var jsonfunction = JSON.stringify(this);
                return JSON.parse(jsonfunction);
            }, toString: function () {
                return JSON.stringify(this);
            }, setInput: function (type, variable) {
                // Creating input
                var newInput = {
                    name: variable,
                    type: type,
                };
                this.inputs.push(newInput);
                return this;
            }, setOutput: function (variable) {
                this.outputs.push(variable);
                return this;
            } });
        return myFunction;
    };
    FunctionModel = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("ContentModel")),
        __metadata("design:paramtypes", [Object])
    ], FunctionModel);
    return FunctionModel;
}());
exports.default = FunctionModel;
