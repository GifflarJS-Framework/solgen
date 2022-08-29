import { container } from "tsyringe";
import GifflarLibraryModel from "./implementations/GifflarLibraryModel";
import { IGifflarLibraryModel } from "./types/IGifflarLibraryModel";

const implementations = {
  default: GifflarLibraryModel,
};

container.registerSingleton<IGifflarLibraryModel>(
  "GifflarLibraryModel",
  implementations.default
);
