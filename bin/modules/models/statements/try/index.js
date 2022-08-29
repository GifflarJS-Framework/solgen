"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var TryModel_1 = __importDefault(require("./implementations/TryModel"));
var implementations = {
    default: TryModel_1.default,
};
tsyringe_1.container.registerSingleton("TryModel", implementations.default);
