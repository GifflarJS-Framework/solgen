import { container } from "tsyringe";
import GifflarContractModel from "./implementations/GifflarContractModel";
import { IGifflarContractModel } from "./types/IGifflarContractModel";

const implementations = {
  default: GifflarContractModel,
};

container.registerSingleton<IGifflarContractModel>(
  "GifflarContractModel",
  implementations.default
);
