import { container } from "tsyringe";
import GifflarContractManager from "./implementations/GifflarContractManager";
import { IContractManager } from "./types/IContractManager";

const implementations = {
  default: GifflarContractManager,
};

container.registerSingleton<IContractManager>(
  "GifflarContractManager",
  implementations.default
);
