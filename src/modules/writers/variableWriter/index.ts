import { container } from "tsyringe";
import VariableWriter from "./implementations/VariableWriter";
import { IVariableWriter } from "./types/IVariableWriter";

const implementations = {
  default: VariableWriter,
};

container.registerSingleton<IVariableWriter>(
  "VariableWriter",
  implementations.default
);
