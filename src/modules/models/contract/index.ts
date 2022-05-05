import { container } from "tsyringe";
import ContractModel from "./implementations/ContractModel";
import { IContract } from "./types/IContract";

const implementations = {
  default: ContractModel,
};

container.registerSingleton<IContract>(
  "ContractModel",
  implementations.default
);
