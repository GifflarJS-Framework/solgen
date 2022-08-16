import { container } from "tsyringe";
import StructModel from "./implementations/StructModel";
import { IStructModel } from "./types/IStructModel";

const implementations = {
  default: StructModel,
};

container.registerSingleton<IStructModel>(
  "StructModel",
  implementations.default
);
