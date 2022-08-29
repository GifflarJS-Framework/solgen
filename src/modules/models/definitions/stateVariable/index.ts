import { container } from "tsyringe";
import StateVariableModel from "./implementations/StateVariableModel";
import { IStateVariableModel } from "./types/IStateVariableModel";

const implementations = {
  default: StateVariableModel,
};

container.registerSingleton<IStateVariableModel>(
  "StateVariableModel",
  implementations.default
);
