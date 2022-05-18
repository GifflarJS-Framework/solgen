"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContract = exports.createContractManager = void 0;
require("reflect-metadata");
require("./modules");
var tsyringe_1 = require("tsyringe");
var createContract = function (name) {
    var gifflarContractModel = tsyringe_1.container.resolve("GifflarContractModel");
    return gifflarContractModel.execute(name);
};
exports.createContract = createContract;
var createContractManager = function () {
    return tsyringe_1.container.resolve("GifflarContractManager");
};
exports.createContractManager = createContractManager;
