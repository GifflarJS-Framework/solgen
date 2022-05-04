import { container } from "tsyringe";
import IfWriter from "./implementations/IfWriter";
import { IIfWriter } from "./types/IIfWriter";

const implementations = {
  default: IfWriter,
};

container.registerSingleton<IIfWriter>("IfWriter", implementations.default);
