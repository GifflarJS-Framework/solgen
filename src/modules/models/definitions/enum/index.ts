import { container } from "tsyringe";
import EnumModel from "./implementations/EnumModel";
import { IEnumModel } from "./types/IEnumModel";

const implementations = {
  default: EnumModel,
};

container.registerSingleton<IEnumModel>("EnumModel", implementations.default);
