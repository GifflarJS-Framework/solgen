"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var EventWriter_1 = __importDefault(require("./implementations/EventWriter"));
var implementations = {
    default: EventWriter_1.default,
};
tsyringe_1.container.registerSingleton("EventWriter", implementations.default);
