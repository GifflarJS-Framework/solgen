import { container } from "tsyringe";
import ImportModel from "./implementations/ImportModel";

const implememtations = {
  default: ImportModel,
};

container.registerSingleton("ImportModel", implememtations.default);
