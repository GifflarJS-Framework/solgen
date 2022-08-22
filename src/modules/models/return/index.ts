import { container } from "tsyringe";
import ReturnModel from "./implementations/ReturnModel";
import { IReturnModel } from "./types/IReturnModel";

const implementations = {
  default: ReturnModel,
};

container.registerSingleton<IReturnModel>(
  "ReturnModel",
  implementations.default
);
