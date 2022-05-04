import { container } from "tsyringe";
import ForWriter from "./implementations/ForWriter";
import { IForWriter } from "./types/IForWriter";

const implementations = {
  default: ForWriter,
};

container.registerSingleton<IForWriter>("ForWriter", implementations.default);
