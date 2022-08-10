import { container } from "tsyringe";
import BreakWriter from "./implementations/BreakWriter";
import { IBreakWriter } from "./types/IBreakWriter";

const implementations = {
  default: BreakWriter,
};

container.registerSingleton<IBreakWriter>(
  "BreakWriter",
  implementations.default
);
