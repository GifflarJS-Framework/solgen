import { container } from "tsyringe";
import RevertWriter from "./implementations/RevertWriter";
import { IRevertWriter } from "./types/IRevertWriter";

const implementations = {
  default: RevertWriter,
};

container.registerSingleton<IRevertWriter>(
  "RevertWriter",
  implementations.default
);
