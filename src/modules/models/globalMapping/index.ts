import { container } from "tsyringe";
import GlobalMappingModel from "./implementations/GlobalMappingModel";
import { IGlobalMappingModel } from "./types/IGlobalMappingModel";

const implementations = {
  default: GlobalMappingModel,
};

container.registerSingleton<IGlobalMappingModel>(
  "GlobalMappingModel",
  implementations.default
);
