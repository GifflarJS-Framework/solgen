import { container } from "tsyringe";
import ModifierWriter from "./implementations/ModifierWriter";
import { IModifierWriter } from "./types/IModifierWriter";

const implementations = {
  default: ModifierWriter,
};

container.registerSingleton<IModifierWriter>(
  "ModifierWriter",
  implementations.default
);
