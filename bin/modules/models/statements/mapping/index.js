"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var MappingModel_1 = __importDefault(require("./implementations/MappingModel"));
var implementations = {
    default: MappingModel_1.default,
};
tsyringe_1.container.registerSingleton("MappingModel", implementations.default);
