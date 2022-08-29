import { container } from "tsyringe";
import ForModel from "./implementations/ForModel";
import { IForModel } from "./types/IForModel";

const implementations = {
  default: ForModel,
};

container.registerSingleton<IForModel>("ForModel", implementations.default);
