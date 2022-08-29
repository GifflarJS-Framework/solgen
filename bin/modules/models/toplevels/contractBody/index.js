"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var ContractBodyModel_1 = __importDefault(require("./implementations/ContractBodyModel"));
var implementations = {
    default: ContractBodyModel_1.default,
};
tsyringe_1.container.registerSingleton("ContractBodyModel", implementations.default);
