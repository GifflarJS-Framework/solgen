"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var solc_1 = __importDefault(require("solc"));
var Compiler = /** @class */ (function () {
    function Compiler() {
    }
    Compiler.prototype.compile = function (code) {
        var output = solc_1.default.compile(JSON.stringify({
            language: "Solidity",
            sources: {
                jsons: {
                    content: code,
                },
            },
            settings: {
                outputSelection: {
                    // return everything
                    "*": {
                        "*": ["*"],
                    },
                },
            },
        }));
        return JSON.parse(output);
    };
    return Compiler;
}());
exports.default = Compiler;
