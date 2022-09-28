"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var GifflarContractModel = /** @class */ (function () {
    function GifflarContractModel(importModel, importWriter, compiler, contractWriter, contractModel, deployer) {
        this.importModel = importModel;
        this.importWriter = importWriter;
        this.compiler = compiler;
        this.contractWriter = contractWriter;
        this.contractModel = contractModel;
        this.deployer = deployer;
        this.imports = [];
    }
    GifflarContractModel.prototype.execute = function (contractName) {
        var _this = this;
        var _contractModel = this.contractModel.execute(contractName);
        var gContract = __assign(__assign({}, _contractModel), { setName: function (newName) {
                gContract.contract.name = newName;
            }, getName: function () {
                return gContract.contract.name;
            }, setImport: function (identifierPath, alias) {
                var newImport = _this.importModel.execute({
                    identifierPath: identifierPath,
                    alias: alias,
                });
                _this.imports.push(newImport);
                return newImport;
            }, write: function (contracts) {
                var _contracts = contracts || [gContract];
                // Writing imports
                gContract.code = _this.importWriter.write(_this.imports);
                // Writing contract
                gContract.code += _this.contractWriter.write(_contracts, function () {
                    return "";
                });
                return gContract.code;
            }, compile: function (callback) {
                var errors;
                if (gContract.code) {
                    gContract.json = _this.compiler.compile(gContract.code);
                }
                if (callback) {
                    if (gContract.json.errors) {
                        errors = gContract.json.errors;
                    }
                    callback(errors);
                    return {};
                }
                // Inserting contract name in compiled json
                gContract.json.contracts.jsons[gContract.getName()] = __assign({ contractName: gContract.getName() }, gContract.json.contracts.jsons[gContract.getName()]);
                // Inserting contract networks in compiled json
                gContract.json.contracts.jsons[gContract.getName()]["networks"] = {};
                return gContract.json;
            }, setWeb3: function (web3) {
                _this.deployer.setWeb3(web3);
            }, getWeb3: function () {
                return _this.deployer.getWeb3();
            }, setDeployConfig: function (networkConfig) {
                _this.deployer.setNetworkConfig(networkConfig);
                if (!_this.deployer.getWeb3()) {
                    return _this.deployer.createWeb3();
                }
            }, addSigner: function (accountPrivateKey) {
                return _this.deployer.addSigner(accountPrivateKey);
            }, deploy: function (inputs, options) { return __awaiter(_this, void 0, void 0, function () {
                var json, _inputs, _a, networkConfig;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            // Avoiding contract to be deployed more than once. But can still be forced
                            if (gContract.deployed() && !(options === null || options === void 0 ? void 0 : options.force)) {
                                throw new Error("".concat(gContract.getName(), " is already deployed at address '").concat((_b = gContract.deployed()) === null || _b === void 0 ? void 0 : _b.options.address, "'"));
                            }
                            if (!gContract.json.contracts) {
                                throw new Error("Failed to find compiled contract.");
                            }
                            json = gContract.json.contracts.jsons[gContract.getName()];
                            _inputs = {
                                abi: json.abi,
                                bytecode: json.evm.bytecode.object,
                                args: inputs.args,
                                from: inputs.from,
                                gas: inputs.gas,
                                gasPrice: inputs.gasPrice,
                                nonce: inputs.nonce,
                            };
                            _a = gContract;
                            return [4 /*yield*/, this.deployer.deploy(_inputs)];
                        case 1:
                            _a.instance = _c.sent();
                            networkConfig = this.deployer.getNetworkConfig();
                            if (networkConfig) {
                                if (!json["networks"][networkConfig.networkId])
                                    json["networks"][networkConfig.networkId] = {};
                                json["networks"][networkConfig.networkId] = {
                                    address: gContract.instance.options.address,
                                };
                            }
                            return [2 /*return*/, gContract.instance];
                    }
                });
            }); }, written: function () {
                return gContract.code;
            }, compiled: function () {
                return gContract.json;
            }, deployed: function () {
                // If instance in memory, just return
                if (gContract.instance)
                    return gContract.instance;
                var web3 = _this.deployer.getWeb3();
                var networkConfig = _this.deployer.getNetworkConfig();
                if (!web3 || !networkConfig)
                    return undefined;
                if (!gContract.json.contracts)
                    return undefined;
                var networkInfo = gContract.json.contracts.jsons[gContract.getName()].networks[networkConfig.networkId];
                if (!networkInfo)
                    return undefined;
                // Obtaining ABI from compiled JSON
                var abi = gContract.json.contracts.jsons[gContract.getName()].abi;
                // Obtaining contract address from compiled JSON
                var address = networkInfo.address;
                if (!address)
                    return undefined;
                // Recovering instance
                var instance = new web3.eth.Contract(abi, address);
                if (!instance) {
                    throw new Error("Failed to obtain instance. Please verify if the network provider is correct.");
                }
                // Defining contract model instance
                gContract.instance = instance;
                return instance;
            } });
        return gContract;
    };
    GifflarContractModel = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("ImportModel")),
        __param(1, (0, tsyringe_1.inject)("ImportWriter")),
        __param(2, (0, tsyringe_1.inject)("Compiler")),
        __param(3, (0, tsyringe_1.inject)("ContractWriter")),
        __param(4, (0, tsyringe_1.inject)("ContractModel")),
        __param(5, (0, tsyringe_1.inject)("Deployer")),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object])
    ], GifflarContractModel);
    return GifflarContractModel;
}());
exports.default = GifflarContractModel;
