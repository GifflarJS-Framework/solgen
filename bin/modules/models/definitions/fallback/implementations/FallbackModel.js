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
var FallbackModel = /** @class */ (function () {
    function FallbackModel(contentModel) {
        this.contentModel = contentModel;
    }
    FallbackModel.prototype.execute = function (_a) {
        var _b = _a.stateVars, stateVars = _b === void 0 ? [] : _b, _c = _a.isPayable, isPayable = _c === void 0 ? false : _c;
        var content_json = this.contentModel.execute({ stateVars: stateVars });
        var fallback = __assign({ isPayable: isPayable }, content_json);
        return fallback;
    };
    FallbackModel = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("ContentModel")),
        __metadata("design:paramtypes", [Object])
    ], FallbackModel);
    return FallbackModel;
}());
exports.default = FallbackModel;
