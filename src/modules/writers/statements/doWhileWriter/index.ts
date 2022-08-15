import { container } from "tsyringe";
import DoWhileWriter from "./implementations/DoWhileWriter";
import { IDoWhileWriter } from "./types/IDoWhileWriter";

const implementations = {
  default: DoWhileWriter,
};

container.registerSingleton<IDoWhileWriter>(
  "DoWhileWriter",
  implementations.default
);
