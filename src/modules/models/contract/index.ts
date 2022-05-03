import { container } from "tsyringe";
import ContractModel from "./implementations/ContractModel";
import { IContractModel } from "./types/IContractModel";

const implementations = {
  default: ContractModel,
};

container.registerSingleton<IContractModel>(
  "ContractModel",
  implementations.default
);
