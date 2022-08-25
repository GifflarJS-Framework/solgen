import { container } from "tsyringe";
import ReceiveModel from "./implementations/ReceiveModel";
import { IReceiveModel } from "./types/IReceiveModel";

const implementations = {
  default: ReceiveModel,
};

container.registerSingleton<IReceiveModel>(
  "ReceiveModel",
  implementations.default
);
