import { container } from "tsyringe";
import { IContractManager } from "@managing/contractManager/types/IContractManager";
import { IContract } from "@models/contract/types/IContract";

const createContract = (): IContract => {
  return container.resolve("GifflarContract");
};

const createContractManager = (): IContractManager => {
  return container.resolve("GifflarContractManager");
};

export { createContractManager, createContract };
