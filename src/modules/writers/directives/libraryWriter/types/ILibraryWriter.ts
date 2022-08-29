import { ILibraryJson } from "@models/directives/library/types/ILibraryJson";

export interface ILibraryWriter {
  write(
    libraries: Array<ILibraryJson>,
    callback?: (individualLibraryText: string, index: number) => void
  ): string;
}
