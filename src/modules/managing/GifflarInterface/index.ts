import { container } from "tsyringe";
import GifflarInterfaceModel from "./implementations/GifflarInterfaceModel";
import { IGifflarInterfaceModel } from "./types/IGifflarInterfaceModel";

const implementations = {
  default: GifflarInterfaceModel,
};

container.registerSingleton<IGifflarInterfaceModel>(
  "GifflarInterfaceModel",
  implementations.default
);
