import { container } from "tsyringe";
import FallbackWriter from "./implementations/FallbackWriter";
import { IFallbackWriter } from "./types/IFallbackWriter";

const implementations = {
  default: FallbackWriter,
};

container.registerSingleton<IFallbackWriter>(
  "FallbackWriter",
  implementations.default
);
