import { container } from "tsyringe";
import OutputWriter from "./implementations/OutputWriter";
import { IOutputWriter } from "./types/IOutputWriter";

const implementations = {
  default: OutputWriter,
};

container.registerSingleton<IOutputWriter>(
  "OutputWriter",
  implementations.default
);
