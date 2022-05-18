"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Request_1 = __importDefault(require("./implementations/Request"));
var implementations = {
    default: Request_1.default,
};
exports.default = implementations.default;
