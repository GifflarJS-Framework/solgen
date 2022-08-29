import { ILibrary } from "@models/directives/library/types/ILibrary";
import { ILibraryJson } from "@models/directives/library/types/ILibraryJson";

export interface IGifflarLibrary extends ILibrary {
  setName(newName: string): void;
  write(contracts?: Array<ILibraryJson>): string;
  compile(callback: (errors: any) => void): any;
  written(): string | undefined;
  compiled(): any | undefined;
}
