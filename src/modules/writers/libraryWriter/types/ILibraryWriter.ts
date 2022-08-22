import { ILibrary } from "@models/library/types/ILibrary";
import { ILibraryJson } from "@models/library/types/ILibraryJson";

export interface ILibraryWriter {
  write(
    libraries: Array<ILibraryJson>,
    callback?: (individualLibraryText: string, index: number) => void
  ): string;
}
