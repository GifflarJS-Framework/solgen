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
var GifflarLibraryModel = /** @class */ (function () {
    function GifflarLibraryModel(importModel, importWriter, compiler, libraryWriter, libraryModel) {
        this.importModel = importModel;
        this.importWriter = importWriter;
        this.compiler = compiler;
        this.libraryWriter = libraryWriter;
        this.libraryModel = libraryModel;
        this.imports = [];
    }
    GifflarLibraryModel.prototype.execute = function (libraryName) {
        var _this = this;
        var _libraryModel = this.libraryModel.execute(libraryName);
        var gLibrary = __assign(__assign({}, _libraryModel), { setName: function (newName) {
                gLibrary.library.name = newName;
            }, getName: function () {
                return gLibrary.library.name;
            }, setImport: function (identifierPath, alias) {
                var newImport = _this.importModel.execute({
                    identifierPath: identifierPath,
                    alias: alias,
                });
                _this.imports.push(newImport);
                return newImport;
            }, write: function (libraries) {
                var _libraries = libraries || [gLibrary];
                // Writing imports
                gLibrary.code = _this.importWriter.write(_this.imports);
                // Writing library
                gLibrary.code += _this.libraryWriter.write(_libraries, function () {
                    return "";
                });
                return gLibrary.code;
            }, compile: function (callback) {
                if (gLibrary.code) {
                    gLibrary.json = _this.compiler.compile(gLibrary.code);
                }
                if (gLibrary.json.errors) {
                    if (callback)
                        callback(gLibrary.json.errors);
                    return {};
                }
                return gLibrary.json;
            }, written: function () {
                return gLibrary.code;
            }, compiled: function () {
                return gLibrary.json;
            } });
        return gLibrary;
    };
    GifflarLibraryModel = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("ImportModel")),
        __param(1, (0, tsyringe_1.inject)("ImportWriter")),
        __param(2, (0, tsyringe_1.inject)("Compiler")),
        __param(3, (0, tsyringe_1.inject)("LibraryWriter")),
        __param(4, (0, tsyringe_1.inject)("LibraryModel")),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
    ], GifflarLibraryModel);
    return GifflarLibraryModel;
}());
exports.default = GifflarLibraryModel;
