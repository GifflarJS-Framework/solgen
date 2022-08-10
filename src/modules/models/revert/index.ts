import { container } from "tsyringe";
import RevertModel from "./implementations/RevertModel";
import { IRevertModel } from "./types/IRevertModel";

const implementations = {
  default: RevertModel,
};

container.registerSingleton<IRevertModel>(
  "RevertModel",
  implementations.default
);
