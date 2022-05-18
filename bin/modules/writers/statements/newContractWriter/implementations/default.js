"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __importDefault(require("../../../../../utils/helpers"));
function createNewContractWriter() {
    var newContractWriter = {
        /**
         *
         * @param {Object} json
         * @example
         * Json
         * {
         *   statement: "newcontract",
         *   variable: "contract",
         *   contractName: "Contract",
         *   args: ["_owner"]
         * }
         */
        write: function (json) {
            var args = helpers_1.default.getCommaExpression(json.args);
            var text = "new ".concat(json.contractName, "(").concat(args, ")");
            return text;
        },
    };
    return newContractWriter;
}
exports.default = createNewContractWriter;
