import { container } from "tsyringe";
import StructWriter from "./implementations/StructWriter";
import { IStructWriter } from "./types/IStructWriter";

const implementations = {
  default: StructWriter,
};

container.registerSingleton<IStructWriter>(
  "StructWriter",
  implementations.default
);
