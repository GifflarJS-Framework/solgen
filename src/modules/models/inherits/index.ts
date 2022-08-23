import { container } from "tsyringe";
import InheritsModel from "./implementations/InheritsModel";
import { IInheritsModel } from "./types/IInheritsModel";

const implementations = {
  default: InheritsModel,
};

container.registerSingleton<IInheritsModel>(
  "InheritsModel",
  implementations.default
);
