"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var EnumModel_1 = __importDefault(require("./implementations/EnumModel"));
var implementations = {
    default: EnumModel_1.default,
};
tsyringe_1.container.registerSingleton("EnumModel", implementations.default);
