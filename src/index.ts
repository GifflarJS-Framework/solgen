import "reflect-metadata";
import "./modules";
import { container } from "tsyringe";
import { IGifflarContract } from "@managing/contract/types/IGifflarContract";
import { IGifflarContractModel } from "@managing/contract/types/IGifflarContractModel";
import { IGifflarContractManager } from "@managing/contractManager/types/IGifflarContractManager";

const createContract = (name: string): IGifflarContract => {
  const gifflarContractModel: IGifflarContractModel = container.resolve(
    "GifflarContractModel"
  );
  return gifflarContractModel.execute(name);
};

const createContractManager = (): IGifflarContractManager => {
  return container.resolve("GifflarContractManager");
};

export { createContractManager, createContract };
