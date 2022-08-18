import { container } from "tsyringe";
import StateMappingWriter from "./implementations/StateMappingWriter";
import { IStateMappingWriter } from "./types/IStateMappingWriter";

const implementations = {
  default: StateMappingWriter,
};

container.registerSingleton<IStateMappingWriter>(
  "StateMappingWriter",
  implementations.default
);
