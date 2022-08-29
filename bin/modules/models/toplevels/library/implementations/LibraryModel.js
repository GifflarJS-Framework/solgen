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
var LibraryModel = /** @class */ (function () {
    function LibraryModel(contractBodyModel) {
        this.contractBodyModel = contractBodyModel;
    }
    LibraryModel.prototype.execute = function (libraryName) {
        // Body of the library (same as contract, but without constructor)
        var contractBody = this.contractBodyModel.execute();
        var library = __assign({ name: libraryName }, contractBody.body);
        var toJson = function () {
            var json = JSON.stringify({ library: library });
            return JSON.parse(json);
        };
        var _assignFunctions = function () {
            var _obj = __assign(__assign({ library: library, code: "", json: {}, toJson: toJson }, contractBody), { toString: function () {
                    return JSON.stringify({ library: _obj.library });
                } });
            return _obj;
        };
        var json = _assignFunctions();
        return json;
    };
    LibraryModel = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("ContractBodyModel")),
        __metadata("design:paramtypes", [Object])
    ], LibraryModel);
    return LibraryModel;
}());
exports.default = LibraryModel;
