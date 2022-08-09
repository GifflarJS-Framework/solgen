import { container } from "tsyringe";
import RequireModel from "./implementations/RequireModel";
import { IRequireModel } from "./types/IRequireModel";

const implementations = {
  default: RequireModel,
};

container.registerSingleton<IRequireModel>(
  "RequireModel",
  implementations.default
);
