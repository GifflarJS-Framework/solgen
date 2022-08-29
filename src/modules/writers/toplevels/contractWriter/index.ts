import { container } from "tsyringe";
import ContractWriter from "./implementations/ContractWriter";
import { IContractWriter } from "./types/IContractWriter";

const implementations = {
  default: ContractWriter,
};

container.registerSingleton<IContractWriter>(
  "ContractWriter",
  implementations.default
);
