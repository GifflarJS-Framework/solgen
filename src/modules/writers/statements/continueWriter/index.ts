import { container } from "tsyringe";
import ContinueWriter from "./implementations/ContinueWriter";
import { IContinueWriter } from "./types/IContinueWriter";

const implementations = {
  default: ContinueWriter,
};

container.registerSingleton<IContinueWriter>(
  "ContinueWriter",
  implementations.default
);
