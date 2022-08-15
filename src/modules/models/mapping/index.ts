import { container } from "tsyringe";
import MappingModel from "./implementations/MappingModel";
import { IMappingModel } from "./types/IMappingModel";

const implementations = {
  default: MappingModel,
};

container.registerSingleton<IMappingModel>(
  "MappingModel",
  implementations.default
);
