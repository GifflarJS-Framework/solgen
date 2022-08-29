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
var LibraryWriter = /** @class */ (function () {
    function LibraryWriter(contractBodyWriter) {
        this.contractBodyWriter = contractBodyWriter;
    }
    LibraryWriter.prototype.write = function (libraries, 
    /** To get every library text individually. */
    callback) {
        var _this = this;
        if (!libraries) {
            return "";
        }
        var text = "";
        libraries.map(function (json, index) {
            // Writing the compiler version
            var txt_version = "pragma solidity 0.6.0;\n\n";
            // Begining of contract
            var txt_start = "library ".concat(json.library.name, "{\n");
            // Writing contract body
            var txt_body = _this.contractBodyWriter.write(json.library);
            // End of contract
            var txt_close = "}\n\n";
            // Joining all texts
            var libraryText = txt_version + txt_start + txt_body + txt_close;
            // Sending the contract code to callback
            if (callback && typeof callback === "function") {
                callback(libraryText, index);
            }
            // Updating final text
            text += libraryText;
            return text;
        });
        return text;
    };
    LibraryWriter = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("ContractBodyWriter")),
        __metadata("design:paramtypes", [Object])
    ], LibraryWriter);
    return LibraryWriter;
}());
exports.default = LibraryWriter;
