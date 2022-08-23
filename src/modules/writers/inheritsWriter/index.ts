import { container } from "tsyringe";
import InheritsWriter from "./implementations/InheritsWriter";
import { IInheritsWriter } from "./types/IInheritsWriter";

const implementations = {
  default: InheritsWriter,
};

container.registerSingleton<IInheritsWriter>(
  "InheritsWriter",
  implementations.default
);
