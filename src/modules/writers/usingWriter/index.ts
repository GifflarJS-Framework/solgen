import { container } from "tsyringe";
import UsingWriter from "./implementations/UsingWriter";
import { IUsingWriter } from "./types/IUsingWriter";

const implementations = {
  default: UsingWriter,
};

container.registerSingleton<IUsingWriter>(
  "UsingWriter",
  implementations.default
);
