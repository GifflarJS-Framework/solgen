"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var GlobalVariableWriter_1 = __importDefault(require("./implementations/GlobalVariableWriter"));
var implementations = {
    default: GlobalVariableWriter_1.default,
};
tsyringe_1.container.registerSingleton("GlobalVariableWriter", implementations.default);
