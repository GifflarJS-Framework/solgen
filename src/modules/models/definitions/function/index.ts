import { container } from "tsyringe";
import FunctionModel from "./implementations/FunctionModel";
import { IFunctionModel } from "./types/IFunctionModel";

const implementations = {
  default: FunctionModel,
};

container.registerSingleton<IFunctionModel>(
  "FunctionModel",
  implementations.default
);
