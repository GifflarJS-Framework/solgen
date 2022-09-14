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
var GifflarManager = /** @class */ (function () {
    function GifflarManager(importModel, importWriter, contractModel, libraryModel, interfaceModel, deployer, compiler) {
        this.importModel = importModel;
        this.importWriter = importWriter;
        this.contractModel = contractModel;
        this.libraryModel = libraryModel;
        this.interfaceModel = interfaceModel;
        this.deployer = deployer;
        this.compiler = compiler;
        this.imports = [];
        this.topLevelModels = [];
        this.code = "";
        this.json = {};
    }
    GifflarManager.prototype._writeTopLevelModels = function (topLevelModels) {
        // Writing imports first
        var completeCode = this.importWriter.write(this.imports);
        topLevelModels.map(function (topLevelModel) {
            // Call the contract writer to write the top level models code
            var code = topLevelModel.write();
            completeCode += code;
        });
        return completeCode;
    };
    GifflarManager.prototype.newImport = function (identifierPath, alias) {
        var newImport = this.importModel.execute({
            identifierPath: identifierPath,
            alias: alias,
        });
        this.imports.push(newImport);
        return newImport;
    };
    GifflarManager.prototype.newContract = function (name) {
        var newcontract = this.contractModel.execute(name);
        newcontract.setName(name);
        this.topLevelModels.push(newcontract);
        return newcontract;
    };
    GifflarManager.prototype.newLibrary = function (name) {
        var newLibrary = this.libraryModel.execute(name);
        newLibrary.setName(name);
        this.topLevelModels.push(newLibrary);
        return newLibrary;
    };
    GifflarManager.prototype.newInterface = function (name) {
        var newInterface = this.interfaceModel.execute(name);
        newInterface.setName(name);
        this.topLevelModels.push(newInterface);
        return newInterface;
    };
    GifflarManager.prototype.getImports = function () {
        return this.imports;
    };
    GifflarManager.prototype.getCode = function () {
        return this.code;
    };
    GifflarManager.prototype.getCompiledJson = function () {
        return this.json;
    };
    GifflarManager.prototype.getAllModels = function () {
        return this.topLevelModels;
    };
    GifflarManager.prototype.getContract = function (name) {
        var filteredContract = this.topLevelModels.filter(function (gTopLevel) {
            var _a;
            return ((_a = gTopLevel.contract) === null || _a === void 0 ? void 0 : _a.name) === name;
        })[0];
        return filteredContract;
    };
    GifflarManager.prototype.getLibrary = function (name) {
        var filteredLibrary = this.topLevelModels.filter(function (gTopLevel) {
            var _a;
            return ((_a = gTopLevel.library) === null || _a === void 0 ? void 0 : _a.name) === name;
        })[0];
        return filteredLibrary;
    };
    GifflarManager.prototype.getInterface = function (name) {
        var filteredInterface = this.topLevelModels.filter(function (gTopLevel) {
            var _a;
            return ((_a = gTopLevel.interface) === null || _a === void 0 ? void 0 : _a.name) === name;
        })[0];
        return filteredInterface;
    };
    GifflarManager.prototype.writeAll = function () {
        var _code = this._writeTopLevelModels(this.topLevelModels);
        this.code = _code;
        return this.code;
    };
    GifflarManager.prototype.write = function (topLevelModels) {
        var _code = this._writeTopLevelModels(topLevelModels);
        this.code = _code;
        return this.code;
    };
    GifflarManager.prototype.written = function (componentName) {
        if (!componentName) {
            return this.code;
        }
        var gTopLevel = this.topLevelModels.filter(function (gTopLevel) {
            return gTopLevel.getName() === componentName;
        })[0];
        if (!gTopLevel)
            return undefined;
        return gTopLevel.code;
    };
    GifflarManager.prototype.compileAll = function (callback) {
        var _this = this;
        // Compiling all
        this.json = this.compiler.compile(this.code);
        // Allowing error handling
        if (this.json.errors && callback) {
            callback(this.json.errors);
        }
        // Updating the contract object
        this.topLevelModels.map(function (gContract) {
            var json = _this.json.contracts.jsons[gContract.getName()];
            if (json) {
                // eslint-disable-next-line no-param-reassign
                gContract.json = json;
            }
            return json;
        });
        return this.json;
    };
    GifflarManager.prototype.compile = function (componentName, callback) {
        // Filtering the component by component name
        var component = this.topLevelModels.filter(function (gTopLevel) {
            return gTopLevel.getName() === componentName;
        })[0];
        // If component object is valid
        if (component &&
            component.compile &&
            typeof component.compile === "function") {
            // Compiling component
            var json = component.compile(function (errors) {
                callback(errors);
            });
            if (json.errors && callback) {
                callback(json.errors);
            }
            // Inserting contract name in compiled json
            component.json.contracts.jsons[component.getName()] = {
                contractName: component.getName(),
            };
            // Inserting contract networks in compiled json
            component.json.contracts.jsons[component.getName()]["networks"] = {};
            return json;
        }
        callback([]);
        throw new Error("Unable to compile contract");
    };
    GifflarManager.prototype.compiled = function (componentName) {
        if (!componentName) {
            return this.json;
        }
        if (this.json) {
            var gTopLevel = this.topLevelModels.filter(function (gTopLevel) {
                return gTopLevel.getName() === componentName;
            })[0];
            if (!gTopLevel)
                return undefined;
            return this.json.contracts.jsons[gTopLevel.getName()];
        }
    };
    GifflarManager.prototype.deploy = function (contractName, inputs, accountPrivateKey) {
        return __awaiter(this, void 0, void 0, function () {
            var json, _inputs, instance, gContract, networkConfig;
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
                            gasPrice: inputs.gasPrice,
                            nonce: inputs.nonce,
                        };
                        return [4 /*yield*/, this.deployer.deploy(_inputs, accountPrivateKey)];
                    case 1:
                        instance = _a.sent();
                        gContract = this.getContract(contractName);
                        gContract.instance = instance;
                        networkConfig = this.deployer.getNetworkConfig();
                        if (networkConfig) {
                            if (!json["networks"][networkConfig.networkId])
                                json["networks"][networkConfig.networkId] = {};
                            json["networks"][networkConfig.networkId] = {
                                address: gContract.instance.options.address,
                            };
                        }
                        return [2 /*return*/, instance];
                }
            });
        });
    };
    GifflarManager.prototype.deployed = function (componentName) {
        if (!componentName) {
            return this.json;
        }
        if (this.json) {
            var gTopLevel = this.topLevelModels.filter(function (gTopLevel) {
                return gTopLevel.getName() === componentName;
            })[0];
            if (!gTopLevel)
                return undefined;
            if (gTopLevel.recoverInstance)
                gTopLevel.recoverInstance();
            return gTopLevel.instance;
        }
    };
    GifflarManager.prototype.setWeb3 = function (newWeb3) {
        this.deployer.setWeb3(newWeb3);
        return newWeb3;
    };
    GifflarManager.prototype.setDeployConfig = function (networkConfig) {
        this.deployer.setNetworkConfig(networkConfig);
        if (!this.deployer.getWeb3()) {
            return this.deployer.createWeb3();
        }
    };
    GifflarManager.prototype.addSigner = function (accountPrivateKey) {
        return this.deployer.addSigner(accountPrivateKey);
    };
    GifflarManager.prototype.getWeb3 = function () {
        return this.deployer.getWeb3();
    };
    GifflarManager = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("ImportModel")),
        __param(1, (0, tsyringe_1.inject)("ImportWriter")),
        __param(2, (0, tsyringe_1.inject)("GifflarContractModel")),
        __param(3, (0, tsyringe_1.inject)("GifflarLibraryModel")),
        __param(4, (0, tsyringe_1.inject)("GifflarInterfaceModel")),
        __param(5, (0, tsyringe_1.inject)("Deployer")),
        __param(6, (0, tsyringe_1.inject)("Compiler")),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object])
    ], GifflarManager);
    return GifflarManager;
}());
exports.default = GifflarManager;
