import { container } from "tsyringe";
import DoWhileModel from "./implementations/DoWhileModel";
import { IDoWhileModel } from "./types/IDoWhileModel";

const implementations = {
  default: DoWhileModel,
};

container.registerSingleton<IDoWhileModel>(
  "DoWhileModel",
  implementations.default
);
