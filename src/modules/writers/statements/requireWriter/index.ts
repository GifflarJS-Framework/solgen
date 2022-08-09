import { container } from "tsyringe";
import RequireWriter from "./implementations/RequireWriter";
import { IRequireWriter } from "./types/IRequireWriter";

const implementations = {
  default: RequireWriter,
};

container.registerSingleton<IRequireWriter>(
  "RequireWriter",
  implementations.default
);
