import { container } from "tsyringe";
import UsingModel from "./implementations/UsingModel";
import { IUsingModel } from "./types/IUsingModel";

const implementations = {
  default: UsingModel,
};

container.registerSingleton<IUsingModel>("UsingModel", implementations.default);
