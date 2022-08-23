import { container } from "tsyringe";
import LibraryWriter from "./implementations/LibraryWriter";
import { ILibraryWriter } from "./types/ILibraryWriter";

const implementations = {
  default: LibraryWriter,
};

container.registerSingleton<ILibraryWriter>(
  "LibraryWriter",
  implementations.default
);
