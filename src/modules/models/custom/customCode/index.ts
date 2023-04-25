import { container } from "tsyringe";
import CustomCodeModel from "./implementations/CustomCode";
import { ICustomCodeModel } from "./types/ICustomCodeModel";

const implementations = {
  default: CustomCodeModel,
};

container.registerSingleton<ICustomCodeModel>(
  "CustomCodeModel",
  implementations.default
);
