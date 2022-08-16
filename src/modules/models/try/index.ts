import { container } from "tsyringe";
import TryModel from "./implementations/TryModel";
import { ITryModel } from "./types/ITryModel";

const implementations = {
  default: TryModel,
};

container.registerSingleton<ITryModel>("TryModel", implementations.default);
