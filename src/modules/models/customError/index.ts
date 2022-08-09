import { container } from "tsyringe";
import CustomError from "./implementations/CustomErrorModel";
import { ICustomErrorModel } from "./types/ICustomErrorModel";

const implementations = {
  default: CustomError,
};

container.registerSingleton<ICustomErrorModel>(
  "CustomErrorModel",
  implementations.default
);
