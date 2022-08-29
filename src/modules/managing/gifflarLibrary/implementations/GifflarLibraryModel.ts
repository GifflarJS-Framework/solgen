import { ICompiler } from "modules/compiler/types/ICompiler";
import { inject, injectable } from "tsyringe";
import { IGifflarLibrary } from "../types/IGifflarLibrary";
import { ILibraryJson } from "@models/directives/library/types/ILibraryJson";
import { ILibraryWriter } from "@writers/directives/libraryWriter/types/ILibraryWriter";
import { ILibraryModel } from "@models/directives/library/types/ILibraryModel";
import { IGifflarLibraryModel } from "../types/IGifflarLibraryModel";

@injectable()
class GifflarLibraryModel implements IGifflarLibraryModel {
  constructor(
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

      write: (libraries?: Array<ILibraryJson>): string => {
        const _libraries = libraries || [gLibrary];
        gLibrary.code = this.libraryWriter.write(_libraries, () => {
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
