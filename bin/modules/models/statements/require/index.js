"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var RequireModel_1 = __importDefault(require("./implementations/RequireModel"));
var implementations = {
    default: RequireModel_1.default,
};
tsyringe_1.container.registerSingleton("RequireModel", implementations.default);
