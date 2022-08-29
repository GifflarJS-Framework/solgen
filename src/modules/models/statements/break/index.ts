import { container } from "tsyringe";
import BreakModel from "./implementations/BreakModel";
import { IBreakModel } from "./types/IBreakModel";

const implementations = {
  default: BreakModel,
};

container.registerSingleton<IBreakModel>("BreakModel", implementations.default);
