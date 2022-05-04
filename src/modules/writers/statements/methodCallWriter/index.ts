import { container } from "tsyringe";
import MethodCallWriter from "./implementations/MethodCallWriter";
import { IMethodCallWriter } from "./types/IMethodCallWriter";

const implementations = {
  default: MethodCallWriter,
};

container.registerSingleton<IMethodCallWriter>(
  "MethodCallWriter",
  implementations.default
);
