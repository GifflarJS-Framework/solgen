import { container } from "tsyringe";
import CatchWriter from "./implementations/CatchWriter";
import { ICatchWriter } from "./types/ICatchWriter";

const implementations = {
  default: CatchWriter,
};

container.registerSingleton<ICatchWriter>(
  "CatchWriter",
  implementations.default
);
