import { container } from "tsyringe";
import InterfaceModel from "./implementations/InterfaceModel";
import { IInterfaceModel } from "./types/IInterfaceModel";

const implementations = {
  default: InterfaceModel,
};

container.registerSingleton<IInterfaceModel>(
  "InterfaceModel",
  implementations.default
);
