import { container } from "tsyringe";
import TryWriter from "./implementations/TryWriter";
import { ITryWriter } from "./types/ITryWriter";

const implementations = {
  default: TryWriter,
};

container.registerSingleton<ITryWriter>("TryWriter", implementations.default);
