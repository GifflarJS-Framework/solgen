import { container } from "tsyringe";
import StateVariableWriter from "./implementations/StateVariableWriter";
import { IStateVariableWriter } from "./types/IStateVariableWriter";

const implementations = {
  default: StateVariableWriter,
};

container.registerSingleton<IStateVariableWriter>(
  "StateVariableWriter",
  implementations.default
);
