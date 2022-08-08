import { container } from "tsyringe";
import CustomVariableModel from "./implementations/CustomVariableModel";
import { ICustomVariableModel } from "./types/ICustomVariableModel";

const implementations = {
  default: CustomVariableModel,
};

container.registerSingleton<ICustomVariableModel>(
  "CustomVariableModel",
  implementations.default
);
