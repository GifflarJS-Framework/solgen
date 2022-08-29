"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var ContentModel_1 = __importDefault(require("./implementations/ContentModel"));
var implementations = {
    default: ContentModel_1.default,
};
tsyringe_1.container.registerSingleton("ContentModel", implementations.default);
