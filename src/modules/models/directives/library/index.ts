import { container } from "tsyringe";
import LibraryModel from "./implementations/LibraryModel";
import { ILibraryModel } from "./types/ILibraryModel";

const implementations = {
  default: LibraryModel,
};

container.registerSingleton<ILibraryModel>(
  "LibraryModel",
  implementations.default
);
