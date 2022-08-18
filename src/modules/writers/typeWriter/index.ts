import { container } from "tsyringe";
import TypeWriter from "./implementations/TypeWriter";
import { ITypeWriter } from "./types/ITypeWriter";

const implementations = {
  default: TypeWriter,
};

container.registerSingleton<ITypeWriter>("TypeWriter", implementations.default);
