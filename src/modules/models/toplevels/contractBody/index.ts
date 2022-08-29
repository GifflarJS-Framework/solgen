import { container } from "tsyringe";
import ContractBodyModel from "./implementations/ContractBodyModel";
import { IContractBodyModel } from "./types/IContractBodyModel";

const implementations = {
  default: ContractBodyModel,
};

container.registerSingleton<IContractBodyModel>(
  "ContractBodyModel",
  implementations.default
);
