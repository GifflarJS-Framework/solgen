"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGifflarManager = exports.createGifflarInterface = exports.createGifflarLibrary = exports.createGifflarContract = void 0;
require("reflect-metadata");
require("./modules");
var tsyringe_1 = require("tsyringe");
/**
 * Creates a new Gifflar Contract
 * @param name The name of the smart contract.
 * @returns A new Gifflar Contract
 * @example
 * import { createGifflarContract } from "@gifflar/solgen";
 *
 * const gContract = createGifflarContract("MyContract");
 */
var createGifflarContract = function (name) {
    var gifflarContractModel = tsyringe_1.container.resolve("GifflarContractModel");
    return gifflarContractModel.execute(name);
};
exports.createGifflarContract = createGifflarContract;
/**
 * Creates a new Gifflar Library
 * @param name The name of the smart contract library.
 * @returns A new Gifflar Library
 * @example
 * import { createGifflarLibrary } from "@gifflar/solgen";
 *
 * const gLibrary = createGifflarLibrary("MyLibrary");
 */
var createGifflarLibrary = function (name) {
    var gifflarContractModel = tsyringe_1.container.resolve("GifflarLibraryModel");
    return gifflarContractModel.execute(name);
};
exports.createGifflarLibrary = createGifflarLibrary;
/**
 * Creates a new Gifflar Interface
 * @param name The name of the smart contract interface.
 * @returns A new Gifflar Interface
 * @example
 * import { createGifflarInterface } from "@gifflar/solgen";
 *
 * const gInterface = createGifflarInterface("MyInterface");
 */
var createGifflarInterface = function (name) {
    var gifflarContractModel = tsyringe_1.container.resolve("GifflarInterfaceModel");
    return gifflarContractModel.execute(name);
};
exports.createGifflarInterface = createGifflarInterface;
/**
 * Creates a new Gifflar Manager to manage many Gifflar Components (Contracts, Libraries and Interfaces).
 * @returns A new Gifflar Manager
 * @example
 * import { createGifflarManager } from "@gifflar/solgen";
 *
 * const gManager = createGifflarManager();
 */
var createGifflarManager = function () {
    return tsyringe_1.container.resolve("GifflarManager");
};
exports.createGifflarManager = createGifflarManager;
