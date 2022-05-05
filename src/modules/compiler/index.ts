import { container } from "tsyringe";
import Compiler from "./implementations/Compiler";
import { ICompiler } from "./types/ICompiler";

const implementations = {
  default: Compiler,
};

container.registerSingleton<ICompiler>("Compiler", implementations.default);
