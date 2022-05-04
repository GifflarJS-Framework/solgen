import { container } from "tsyringe";
import NewContractWriter from "./implementations/NewContractWriter";
import { INewContractWriter } from "./types/INewContractWriter";

const implementations = {
  default: NewContractWriter,
};

container.registerSingleton<INewContractWriter>(
  "NewContractWriter",
  implementations.default
);
