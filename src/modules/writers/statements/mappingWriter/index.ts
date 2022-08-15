import { container } from "tsyringe";
import MappingWriter from "./implementations/MappingWriter";
import { IMappingWriter } from "./types/IMappingWriter";

const implementations = {
  default: MappingWriter,
};

container.registerSingleton<IMappingWriter>(
  "MappingWriter",
  implementations.default
);
