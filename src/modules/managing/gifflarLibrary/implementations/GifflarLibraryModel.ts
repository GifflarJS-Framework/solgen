import { ICompiler } from "modules/compiler/types/ICompiler";
import { inject, injectable } from "tsyringe";
import { IGifflarLibrary } from "../types/IGifflarLibrary";
import { ILibraryJson } from "@models/toplevels/library/types/ILibraryJson";
import { ILibraryWriter } from "@writers/toplevels/libraryWriter/types/ILibraryWriter";
import { ILibraryModel } from "@models/toplevels/library/types/ILibraryModel";
import { IGifflarLibraryModel } from "../types/IGifflarLibraryModel";
import { IImportModel } from "@models/toplevels/import/types/IImportModel";
import { IImportWriter } from "@writers/toplevels/importWriter/types/IImportWriter";
import { IImport } from "@models/toplevels/import/types/IImport";

@injectable()
class GifflarLibraryModel implements IGifflarLibraryModel {
  private imports: Array<IImport> = [];

  constructor(
    @inject("ImportModel")
    private importModel: IImportModel,
    @inject("ImportWriter")
    private importWriter: IImportWriter,
    @inject("Compiler")
    private compiler: ICompiler,
    @inject("LibraryWriter")
    private libraryWriter: ILibraryWriter,
    @inject("LibraryModel")
    private libraryModel: ILibraryModel
  ) {}

  execute(libraryName: string): IGifflarLibrary {
    const _libraryModel = this.libraryModel.execute(libraryName);

    const gLibrary: IGifflarLibrary = {
      ..._libraryModel,
      setName: (newName: string): void => {
        gLibrary.library.name = newName;
      },

      getName: (): string => {
        return gLibrary.library.name;
      },

      setImport: (identifierPath: string, alias?: string): IImport => {
        const newImport: IImport = this.importModel.execute({
          identifierPath,
          alias,
        });
        this.imports.push(newImport);

        return newImport;
      },

      write: (libraries?: Array<ILibraryJson>): string => {
        const _libraries = libraries || [gLibrary];
        // Writing imports
        gLibrary.code = this.importWriter.write(this.imports);
        // Writing library
        gLibrary.code += this.libraryWriter.write(_libraries, () => {
          return "";
        });
        return gLibrary.code;
      },

      compile: (callback: (errors: any) => void): any => {
        let errors;
        if (gLibrary.code) {
          gLibrary.json = this.compiler.compile(gLibrary.code);
        }
        if (callback) {
          if (gLibrary.json.errors) {
            errors = gLibrary.json.errors;
          }

          callback(errors);
        }
        return gLibrary.json;
      },

      written: (): string | undefined => {
        return gLibrary.code;
      },

      compiled: (): any | undefined => {
        return gLibrary.json;
      },
    };

    return gLibrary;
  }
}

export default GifflarLibraryModel;
