import { container } from "tsyringe";
import ReturnWriter from "./implementations/ReturnWriter";
import { IReturnWriter } from "./types/IReturnWriter";

const implementations = {
  default: ReturnWriter,
};

container.registerSingleton<IReturnWriter>(
  "ReturnWriter",
  implementations.default
);
