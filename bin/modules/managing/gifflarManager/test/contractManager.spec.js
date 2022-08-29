"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
var fs_1 = __importDefault(require("fs"));
var solc_1 = __importDefault(require("solc"));
var tsyringe_1 = require("tsyringe");
var writing_path = "".concat(__dirname, "/../../../../test/examples/writing/");
var expectedJson = JSON.stringify(require("../../../../test/examples/modeling/contract-5.json"));
var ganache = require("ganache-cli");
var Web3 = require("web3");
var web3 = new Web3(ganache.provider());
var accounts;
beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, web3.eth.getAccounts()];
            case 1:
                accounts = _a.sent();
                return [2 /*return*/];
        }
    });
}); });
describe("Contract Manager Writer", function () {
    var gContractManager = tsyringe_1.container.resolve("GifflarManager");
    gContractManager.setWeb3(web3);
    it("Writing Gifflar Manager", function () {
        var gContract = gContractManager.newContract("DHT11");
        var gContractController = gContractManager.newContract("Controller");
        var expected = fs_1.default.readFileSync("".concat(writing_path, "contract-5.txt"), {
            encoding: "utf8",
        });
        // Creating the variables
        gContract.createVariable({ regularType: "address" }, "manager", "public");
        gContract.createVariable({ regularType: "string" }, "name", "public");
        gContract.createVariable({ regularType: "uint256" }, "value1", "public");
        gContract.createVariable({ regularType: "uint256" }, "max_value1", "public");
        gContract.createVariable({ regularType: "uint256" }, "min_value1", "public");
        // Creating events
        gContract.createEvent("temperatureOverflow", [
            { name: "value1", type: "uint256" },
            { name: "max_value1", type: "uint256" },
        ]);
        gContract.createEvent("temperatureUnderflow", [
            { name: "value1", type: "uint256" },
            { name: "min_value1", type: "uint256" },
        ]);
        // Creating constructor
        gContract
            .createConstructor("public")
            .setInput({ regularType: "address" }, "_owner")
            .setAssignment("manager", "_owner")
            .setAssignment("name", '"DHT11"');
        // Creating a new function
        gContract
            .createFunction("setValue", "public")
            .setInput({ regularType: "uint256" }, "_val")
            .setInput({ regularType: "uint256" }, "_valueId")
            .beginIf("_valueId == 1")
            .setAssignment("value1", "_val")
            .beginIf("value1 >= max_value1")
            .setEventCall("temperatureOverflow", ["value1", "max_value1"])
            .endIf()
            .beginElseIf("value1 <= min_value1")
            .setEventCall("temperatureUnderflow", ["value1", "min_value1"])
            .endElseIf()
            .endIf();
        gContract
            .createFunction("setName", "public")
            .setInput({ regularType: "string" }, "_name")
            .setAssignment("name", "_name");
        // Modeling Variables
        gContractController.createVariable({ customType: "DHT11[]" }, "contracts", "public");
        gContractController.createVariable({ regularType: "uint256" }, "counter", "private", "0");
        // Modeling Functions
        gContractController
            .createFunction("createContract", "public")
            .setInput({ regularType: "address" }, "_owner")
            .setContractVariable("newContract", "DHT11", ["_owner"])
            .setMethodCall("contracts", "push", "newContract")
            .setAssignment("counter", "counter + 1");
        gContractController
            .createFunction("getLastContract", "public")
            .setOutput({ customType: "DHT11" })
            .setVariable({ customType: "DHT11" }, "_contract")
            .beginIf("counter > 0")
            .setAssignment("_contract", "contracts[counter - 1]")
            .endIf()
            .beginElse()
            .setAssignment("_contract", "contracts[0]")
            .endIf()
            .setReturn(["_contract"]);
        var resultJson = gContractManager.getAllModels().map(function (contract) {
            return JSON.parse(contract.toString());
        });
        var result = gContractManager.writeAll();
        // const deployed = gContract.compile((err) => {});
        // console.log(JSON.stringify(deployed));
        // Testing json
        expect(JSON.stringify(resultJson)).toEqual(expectedJson);
        // Testing code
        expect(result).toEqual(expected);
    });
    // COMPILING
    it("Compiling", function () {
        var compiled = gContractManager.compileAll(function (errors) {
            if (Array.isArray(errors)) {
                errors.map(function (e) {
                    // console.log(e.formattedMessage);
                    return null;
                });
            }
        });
        var config = JSON.stringify({
            language: "Solidity",
            sources: {
                jsons: {
                    content: gContractManager.written(),
                },
            },
            settings: {
                outputSelection: {
                    // return everything
                    "*": {
                        "*": ["*"],
                    },
                },
            },
        });
        var expected_json = solc_1.default.compile(config);
        var actual_json = JSON.stringify(compiled);
        expect(actual_json).toEqual(expected_json);
    });
    // DEPLOYING
    it("Deploying Controller", function () { return __awaiter(void 0, void 0, void 0, function () {
        var instance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, gContractManager.deploy("Controller", {
                        from: accounts[0],
                        args: [],
                        gas: 4000000,
                    })];
                case 1:
                    instance = _a.sent();
                    expect(instance).toHaveProperty("options");
                    expect(instance.options).toHaveProperty("address");
                    return [2 /*return*/];
            }
        });
    }); });
});
