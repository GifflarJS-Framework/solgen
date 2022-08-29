import "reflect-metadata";
import "./modules";
import { container } from "tsyringe";
import { IGifflarContract } from "@managing/gifflarContract/types/IGifflarContract";
import { IGifflarContractModel } from "@managing/gifflarContract/types/IGifflarContractModel";
import { IGifflarManager } from "@managing/gifflarManager/types/IGifflarManager";

const createContract = (name: string): IGifflarContract => {
  const gifflarContractModel: IGifflarContractModel = container.resolve(
    "GifflarContractModel"
  );
  return gifflarContractModel.execute(name);
};

const createContractManager = (): IGifflarManager => {
  return container.resolve("GifflarManager");
};

export { createContractManager, createContract };
