"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var Deployer_1 = __importDefault(require("./implementations/Deployer"));
var implementations = {
    default: Deployer_1.default,
};
tsyringe_1.container.registerSingleton("Deployer", implementations.default);
