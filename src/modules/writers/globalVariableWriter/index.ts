import { container } from "tsyringe";
import GlobalVariableWriter from "./implementations/GlobalVariableWriter";
import { IGlobalVariableWriter } from "./types/IGlobalVariableWriter";

const implementations = {
  default: GlobalVariableWriter,
};

container.registerSingleton<IGlobalVariableWriter>(
  "GlobalVariableWriter",
  implementations.default
);
