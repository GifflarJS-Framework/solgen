import { container } from "tsyringe";
import NewContractModel from "./implementations/NewContractModel";
import { INewContractModel } from "./types/INewContractModel";

const implementations = {
  default: NewContractModel,
};

container.registerSingleton<INewContractModel>(
  "NewContractModel",
  implementations.default
);
