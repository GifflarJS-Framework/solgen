require("module-alias/register");
const createContractManager = require("@management/contractManager");
const createContract = require("@management/contract");
const createJsonParser = require("@iot/jsonParser");

const Gifflar = {
  createContractManager,
  createContract,
  createJsonParser,
};

module.exports = Gifflar;
