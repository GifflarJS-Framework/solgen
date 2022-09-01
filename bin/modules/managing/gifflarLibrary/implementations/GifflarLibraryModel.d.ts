import { ICompiler } from "../../../compiler/types/ICompiler";
import { IGifflarLibrary } from "../types/IGifflarLibrary";
import { ILibraryWriter } from "../../../writers/toplevels/libraryWriter/types/ILibraryWriter";
import { ILibraryModel } from "../../../models/toplevels/library/types/ILibraryModel";
import { IGifflarLibraryModel } from "../types/IGifflarLibraryModel";
import { IImportModel } from "../../../models/toplevels/import/types/IImportModel";
import { IImportWriter } from "../../../writers/toplevels/importWriter/types/IImportWriter";
declare class GifflarLibraryModel implements IGifflarLibraryModel {
    private importModel;
    private importWriter;
    private compiler;
    private libraryWriter;
    private libraryModel;
    private imports;
    constructor(importModel: IImportModel, importWriter: IImportWriter, compiler: ICompiler, libraryWriter: ILibraryWriter, libraryModel: ILibraryModel);
    execute(libraryName: string): IGifflarLibrary;
}
export default GifflarLibraryModel;
