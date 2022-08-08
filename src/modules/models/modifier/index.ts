import { container } from "tsyringe";
import ModifierModel from "./implementations/ModifierModel";
import { IModifierModel } from "./types/IModifierModel";

const implementations = {
  default: ModifierModel,
};

container.registerSingleton<IModifierModel>(
  "ModifierModel",
  implementations.default
);
