import { container } from "tsyringe";
import GlobalMappingWriter from "./implementations/GlobalMappingWriter";
import { IGlobalMappingWriter } from "./types/IGlobalMappingWriter";

const implementations = {
  default: GlobalMappingWriter,
};

container.registerSingleton<IGlobalMappingWriter>(
  "GlobalMappingWriter",
  implementations.default
);
