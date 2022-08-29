"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var MethodCallModel_1 = __importDefault(require("./implementations/MethodCallModel"));
var implementations = {
    default: MethodCallModel_1.default,
};
tsyringe_1.container.registerSingleton("MethodCallModel", implementations.default);
