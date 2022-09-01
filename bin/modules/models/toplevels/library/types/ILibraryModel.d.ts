import { ILibrary } from "./ILibrary";
export interface ILibraryModel {
    execute(libraryName: string): ILibrary;
}
