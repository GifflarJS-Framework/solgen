import { container } from "tsyringe";
import ImportWriter from "./implementations/ImportWriter";
import { IImportWriter } from "./types/IImportWriter";

const implementations = {
  default: ImportWriter,
};

container.registerSingleton<IImportWriter>(
  "ImportWriter",
  implementations.default
);
