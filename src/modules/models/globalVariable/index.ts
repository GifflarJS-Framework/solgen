import { container } from "tsyringe";
import GlobalVariableModel from "./implementations/GlobalVariableModel";
import { IGlobalVariableModel } from "./types/IGlobalVariableModel";

const implementations = {
  default: GlobalVariableModel,
};

container.registerSingleton<IGlobalVariableModel>(
  "GlobalVariableModel",
  implementations.default
);
