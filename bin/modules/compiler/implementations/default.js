"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var solc_1 = __importDefault(require("solc"));
function createCompiler() {
    var compiler = {
        /**
         * Compiles a Solidity code
         * @param {string} code
         */
        compile: function (code) {
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
        },
    };
    return compiler;
}
exports.default = createCompiler;
