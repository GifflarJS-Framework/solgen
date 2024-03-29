import { ICompiler } from "@compiler/types/ICompiler";
import { IImport } from "@models/toplevels/import/types/IImport";
import { IImportModel } from "@models/toplevels/import/types/IImportModel";
import { IInterfaceJson } from "@models/toplevels/interface/types/IInterfaceJson";
import { IInterfaceModel } from "@models/toplevels/interface/types/IInterfaceModel";
import { IImportWriter } from "@writers/toplevels/importWriter/types/IImportWriter";
import { IInterfaceWriter } from "@writers/toplevels/interfaceWriter/types/IInterfaceWriter";
import { inject, injectable } from "tsyringe";
import { IGifflarInterface } from "../types/IGifflarInterface";
import { IGifflarInterfaceModel } from "../types/IGifflarInterfaceModel";

@injectable()
class GifflarInterfaceModel implements IGifflarInterfaceModel {
  private imports: Array<IImport> = [];

  constructor(
    @inject("ImportModel")
    private importModel: IImportModel,
    @inject("ImportWriter")
    private importWriter: IImportWriter,
    @inject("Compiler")
    private compiler: ICompiler,
    @inject("InterfaceWriter")
    private interfaceWriter: IInterfaceWriter,
    @inject("InterfaceModel")
    private interfaceModel: IInterfaceModel
  ) {}

  execute(interfaceName: string): IGifflarInterface {
    const _interfaceModel = this.interfaceModel.execute(interfaceName);

    const gInterface: IGifflarInterface = {
      ..._interfaceModel,
      setName: (newName: string): void => {
        gInterface.interface.name = newName;
      },

      getName(): string {
        return gInterface.interface.name;
      },

      setImport: (identifierPath: string, alias?: string): IImport => {
        const newImport: IImport = this.importModel.execute({
          identifierPath,
          alias,
        });
        this.imports.push(newImport);

        return newImport;
      },

      write: (interfaces?: Array<IInterfaceJson>): string => {
        const _interfaces = interfaces || [gInterface];
        // Writing imports
        gInterface.code = this.importWriter.write(this.imports);
        // Writing Interface
        gInterface.code += this.interfaceWriter.write(_interfaces, () => {
          return "";
        });
        return gInterface.code;
      },

      compile: (callback?: (errors: any[]) => void): any => {
        if (gInterface.code) {
          gInterface.json = this.compiler.compile(gInterface.code);
        }
        if (gInterface.json.errors) {
          if (callback) callback(gInterface.json.errors);
          return {};
        }

        return gInterface.json;
      },

      written: (): string | undefined => {
        return gInterface.code;
      },

      compiled: (): any | undefined => {
        return gInterface.json;
      },
    };

    return gInterface;
  }
}

export default GifflarInterfaceModel;
