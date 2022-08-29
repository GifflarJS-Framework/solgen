import { container } from "tsyringe";
import ContinueModel from "./implementations/ContinueModel";
import { IContinueModel } from "./types/IContinueModel";

const implementations = {
  default: ContinueModel,
};

container.registerSingleton<IContinueModel>(
  "ContinueModel",
  implementations.default
);
