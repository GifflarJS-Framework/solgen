import { IImport } from "../../../models/toplevels/import/types/IImport";
import { ILibrary } from "../../../models/toplevels/library/types/ILibrary";
import { ILibraryJson } from "../../../models/toplevels/library/types/ILibraryJson";
export interface IGifflarLibrary extends ILibrary {
    setName(newName: string): void;
    getName(): string;
    setImport(identifierPath: string, alias?: string): IImport;
    write(contracts?: Array<ILibraryJson>): string;
    compile(callback?: (errors: any[]) => void): any;
    written(): string | undefined;
    compiled(): any | undefined;
}
