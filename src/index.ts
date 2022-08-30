import "reflect-metadata";
import "./modules";
import { container } from "tsyringe";
import { IGifflarContract } from "@managing/gifflarContract/types/IGifflarContract";
import { IGifflarContractModel } from "@managing/gifflarContract/types/IGifflarContractModel";
import { IGifflarManager } from "@managing/gifflarManager/types/IGifflarManager";
import { IGifflarLibrary } from "@managing/gifflarLibrary/types/IGifflarLibrary";
import { IGifflarLibraryModel } from "@managing/gifflarLibrary/types/IGifflarLibraryModel";
import { IGifflarInterface } from "@managing/GifflarInterface/types/IGifflarInterface";
import { IGifflarInterfaceModel } from "@managing/GifflarInterface/types/IGifflarInterfaceModel";

const createGifflarContract = (name: string): IGifflarContract => {
  const gifflarContractModel: IGifflarContractModel = container.resolve(
    "GifflarContractModel"
  );
  return gifflarContractModel.execute(name);
};

const createGifflarLibrary = (name: string): IGifflarLibrary => {
  const gifflarContractModel: IGifflarLibraryModel = container.resolve(
    "GifflarLibraryModel"
  );
  return gifflarContractModel.execute(name);
};

const createGifflarInterface = (name: string): IGifflarInterface => {
  const gifflarContractModel: IGifflarInterfaceModel = container.resolve(
    "GifflarInterfaceModel"
  );
  return gifflarContractModel.execute(name);
};

const createGifflarManager = (): IGifflarManager => {
  return container.resolve("GifflarManager");
};

export {
  createGifflarContract,
  createGifflarLibrary,
  createGifflarInterface,
  createGifflarManager,
};
