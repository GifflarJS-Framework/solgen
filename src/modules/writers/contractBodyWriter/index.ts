import { container } from "tsyringe";
import ContractBodyWriter from "./implementations/ContractBodyWriter";
import { IContractBodyWriter } from "./types/IContractBodyWriter";

const implementations = {
  default: ContractBodyWriter,
};

container.registerSingleton<IContractBodyWriter>(
  "ContractBodyWriter",
  implementations.default
);
