import { container } from "tsyringe";
import FunctionWriter from "./implementations/FunctionWriter";
import { IFunctionWriter } from "./types/IFunctionWriter";

const implementations = {
  default: FunctionWriter,
};

container.registerSingleton<IFunctionWriter>(
  "FunctionWriter",
  implementations.default
);
