import { container } from "tsyringe";
import GifflarContract from "./implementations/GifflarContract";
import { IGifflarContractModel } from "./types/IGifflarContractModel";

const implementations = {
  default: GifflarContract,
};

container.registerSingleton<IGifflarContractModel>(
  "GifflarContractModel",
  implementations.default
);
