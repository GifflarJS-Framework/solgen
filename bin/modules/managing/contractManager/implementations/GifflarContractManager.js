"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var GifflarContractManager = /** @class */ (function () {
    function GifflarContractManager(contractModel, contractWriter, deployer, compiler) {
        this.contractModel = contractModel;
        this.contractWriter = contractWriter;
        this.deployer = deployer;
        this.compiler = compiler;
        this.contracts = [];
        this.code = "";
        this.json = {};
    }
    GifflarContractManager.prototype._writeContracts = function (contracts) {
        var _contracts = contracts;
        // If contract object should be updated
        var callback = null;
        // Saving the individual code inside contract
        callback = function (individualCode, index) {
            // Updating individual contracts
            _contracts[index].code = individualCode;
        };
        // Call the contract writer to write the contracts code
        var code = this.contractWriter.write(_contracts, callback);
        return code;
    };
    GifflarContractManager.prototype.newContract = function (name) {
        var newcontract = this.contractModel.execute(name);
        newcontract.setName(name);
        this.contracts.push(newcontract);
        return newcontract;
    };
    GifflarContractManager.prototype.getContract = function (name) {
        return this.contracts.filter(function (contract) {
            return contract.name === name;
        })[0];
    };
    GifflarContractManager.prototype.writeAll = function () {
        var _code = this._writeContracts(this.contracts);
        this.code = _code;
        return this.code;
    };
    GifflarContractManager.prototype.write = function (contracts) {
        var _code = this._writeContracts(contracts);
        this.code = _code;
        return this.code;
    };
    GifflarContractManager.prototype.written = function () {
        return this.code;
    };
    GifflarContractManager.prototype.compileAll = function (callback) {
        var _this = this;
        // Compiling all
        this.json = this.compiler.compile(this.code);
        // Allowing error handling
        if (this.json.errors && callback) {
            callback(this.json.errors);
        }
        // Updating the contract object
        this.contracts.map(function (contract) {
            var json = _this.json.contracts.jsons[contract.name];
            if (json) {
                // eslint-disable-next-line no-param-reassign
                contract.json = json;
            }
            return json;
        });
        return this.json;
    };
    GifflarContractManager.prototype.compile = function (contractName, callback) {
        // Filtering the contract by contract name
        var contract = this.contracts.filter(function (contractItem) {
            return contractItem.name === contractName;
        })[0];
        // If contract object is valid
        if (contract &&
            contract.compile &&
            typeof contract.compile === "function") {
            // Compiling contract
            var json = contract.compile(function (errors) {
                callback(errors);
            });
            if (json.errors && callback) {
                callback(json.errors);
            }
            return json;
        }
        callback([]);
        throw new Error("Unable to compile contract");
    };
    GifflarContractManager.prototype.deploy = function (contractName, inputs, accountPrivateKey) {
        return __awaiter(this, void 0, void 0, function () {
            var json, _inputs, contract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        json = this.json.contracts.jsons[contractName];
                        if (!json) {
                            throw new Error("Contract wasn't compiled yet.");
                        }
                        _inputs = {
                            abi: json.abi,
                            bytecode: json.evm.bytecode.object,
                            args: inputs.args,
                            from: inputs.from,
                            gas: inputs.gas,
                        };
                        return [4 /*yield*/, this.deployer.deploy(_inputs, accountPrivateKey)];
                    case 1:
                        contract = _a.sent();
                        return [2 /*return*/, contract];
                }
            });
        });
    };
    GifflarContractManager.prototype.setWeb3 = function (newWeb3) {
        this.deployer.setWeb3(newWeb3);
        return newWeb3;
    };
    GifflarContractManager.prototype.getWeb3 = function () {
        return this.deployer.getWeb3();
    };
    GifflarContractManager = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("GifflarContractModel")),
        __param(1, (0, tsyringe_1.inject)("ContractWriter")),
        __param(2, (0, tsyringe_1.inject)("Deployer")),
        __param(3, (0, tsyringe_1.inject)("Compiler")),
        __metadata("design:paramtypes", [Object, Object, Object, Object])
    ], GifflarContractManager);
    return GifflarContractManager;
}());
exports.default = GifflarContractManager;
