import { container } from "tsyringe";
import WhileModel from "./implementations/WhileModel";
import { IWhileModel } from "./types/IWhileModel";

const implementations = {
  default: WhileModel,
};

container.registerSingleton<IWhileModel>("WhileModel", implementations.default);
