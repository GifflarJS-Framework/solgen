import { container } from "tsyringe";
import WhileWriter from "./implementations/WhileWriter";
import { IWhileWriter } from "./types/IWhileWriter";

const implementations = {
  default: WhileWriter,
};

container.registerSingleton<IWhileWriter>(
  "WhileWriter",
  implementations.default
);
