import { IGifflarLibrary } from "./IGifflarLibrary";
export interface IGifflarLibraryModel {
    execute(libraryName: string): IGifflarLibrary;
}
