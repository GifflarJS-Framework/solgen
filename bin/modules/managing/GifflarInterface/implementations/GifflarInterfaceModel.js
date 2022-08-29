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
var GifflarInterfaceModel = /** @class */ (function () {
    function GifflarInterfaceModel(importModel, importWriter, compiler, interfaceWriter, interfaceModel) {
        this.importModel = importModel;
        this.importWriter = importWriter;
        this.compiler = compiler;
        this.interfaceWriter = interfaceWriter;
        this.interfaceModel = interfaceModel;
        this.imports = [];
    }
    GifflarInterfaceModel.prototype.execute = function (interfaceName) {
        var _this = this;
        var _interfaceModel = this.interfaceModel.execute(interfaceName);
        var gInterface = __assign(__assign({}, _interfaceModel), { setName: function (newName) {
                gInterface.interface.name = newName;
            }, getName: function () {
                return gInterface.interface.name;
            }, setImport: function (identifierPath, alias) {
                var newImport = _this.importModel.execute({
                    identifierPath: identifierPath,
                    alias: alias,
                });
                _this.imports.push(newImport);
                return newImport;
            }, write: function (interfaces) {
                var _interfaces = interfaces || [gInterface];
                // Writing imports
                gInterface.code = _this.importWriter.write(_this.imports);
                // Writing Interface
                gInterface.code += _this.interfaceWriter.write(_interfaces, function () {
                    return "";
                });
                return gInterface.code;
            }, compile: function (callback) {
                var errors;
                if (gInterface.code) {
                    gInterface.json = _this.compiler.compile(gInterface.code);
                }
                if (callback) {
                    if (gInterface.json.errors) {
                        errors = gInterface.json.errors;
                    }
                    callback(errors);
                }
                return gInterface.json;
            }, written: function () {
                return gInterface.code;
            }, compiled: function () {
                return gInterface.json;
            } });
        return gInterface;
    };
    GifflarInterfaceModel = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("ImportModel")),
        __param(1, (0, tsyringe_1.inject)("ImportWriter")),
        __param(2, (0, tsyringe_1.inject)("Compiler")),
        __param(3, (0, tsyringe_1.inject)("InterfaceWriter")),
        __param(4, (0, tsyringe_1.inject)("InterfaceModel")),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
    ], GifflarInterfaceModel);
    return GifflarInterfaceModel;
}());
exports.default = GifflarInterfaceModel;
