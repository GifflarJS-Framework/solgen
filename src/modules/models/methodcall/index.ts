import { container } from "tsyringe";
import MethodCallModel from "./implementations/MethodCallModel";
import { IMethodCallModel } from "./types/IMethodCallModel";

const implementations = {
  default: MethodCallModel,
};

container.registerSingleton<IMethodCallModel>(
  "MethodCallModel",
  implementations.default
);
