import { container } from "tsyringe";
import StateMappingModel from "./implementations/StateMappingModel";
import { IStateMappingModel } from "./types/IStateMappingModel";

const implementations = {
  default: StateMappingModel,
};

container.registerSingleton<IStateMappingModel>(
  "StateMappingModel",
  implementations.default
);
