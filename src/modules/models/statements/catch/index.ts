import { container } from "tsyringe";
import CatchModel from "./implementations/CatchModel";
import { ICatchModel } from "./types/ICatchModel";

const implementations = {
  default: CatchModel,
};

container.registerSingleton<ICatchModel>("CatchModel", implementations.default);
