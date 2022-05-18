import "reflect-metadata";
import "./modules";
import { IGifflarContract } from "./modules/managing/contract/types/IGifflarContract";
import { IGifflarContractManager } from "./modules/managing/contractManager/types/IGifflarContractManager";
declare const createContract: (name: string) => IGifflarContract;
declare const createContractManager: () => IGifflarContractManager;
export { createContractManager, createContract };
