import "reflect-metadata";
import "./modules";
import { IGifflarContract } from "./modules/managing/gifflarContract/types/IGifflarContract";
import { IGifflarManager } from "./modules/managing/gifflarManager/types/IGifflarManager";
declare const createContract: (name: string) => IGifflarContract;
declare const createContractManager: () => IGifflarManager;
export { createContractManager, createContract };
