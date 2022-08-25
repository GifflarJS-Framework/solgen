import { container } from "tsyringe";
import FallbackModel from "./implementations/FallbackModel";
import { IFallbackModel } from "./types/IFallbackModel";

const implementations = {
  default: FallbackModel,
};

container.registerSingleton<IFallbackModel>(
  "FallbackModel",
  implementations.default
);
