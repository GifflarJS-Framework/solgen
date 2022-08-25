import { container } from "tsyringe";
import TypeModel from "./implementations/TypeModel";
import { ITypeModel } from "./types/ITypeModel";

const implementations = {
  default: TypeModel,
};

container.registerSingleton<ITypeModel>("TypeModel", implementations.default);
