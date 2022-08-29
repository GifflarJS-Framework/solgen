"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var IfModel_1 = __importDefault(require("./implementations/IfModel"));
var implementations = {
    default: IfModel_1.default,
};
tsyringe_1.container.registerSingleton("IfModel", implementations.default);
