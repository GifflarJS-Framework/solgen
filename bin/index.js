"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGifflarManager = exports.createGifflarInterface = exports.createGifflarLibrary = exports.createGifflarContract = void 0;
require("reflect-metadata");
require("./modules");
var tsyringe_1 = require("tsyringe");
var createGifflarContract = function (name) {
    var gifflarContractModel = tsyringe_1.container.resolve("GifflarContractModel");
    return gifflarContractModel.execute(name);
};
exports.createGifflarContract = createGifflarContract;
var createGifflarLibrary = function (name) {
    var gifflarContractModel = tsyringe_1.container.resolve("GifflarLibraryModel");
    return gifflarContractModel.execute(name);
};
exports.createGifflarLibrary = createGifflarLibrary;
var createGifflarInterface = function (name) {
    var gifflarContractModel = tsyringe_1.container.resolve("GifflarInterfaceModel");
    return gifflarContractModel.execute(name);
};
exports.createGifflarInterface = createGifflarInterface;
var createGifflarManager = function () {
    return tsyringe_1.container.resolve("GifflarManager");
};
exports.createGifflarManager = createGifflarManager;
