import { container } from "tsyringe";
import VariableModel from "./implementations/VariableModel";
import { IVariableModel } from "./types/IVariableModel";

const implementations = {
  default: VariableModel,
};

container.registerSingleton<IVariableModel>(
  "VariableModel",
  implementations.default
);
