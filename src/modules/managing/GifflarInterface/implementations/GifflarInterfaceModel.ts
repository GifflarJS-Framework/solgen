import { ICompiler } from "@compiler/types/ICompiler";
import { IInterfaceJson } from "@models/directives/interface/types/IInterfaceJson";
import { IInterfaceModel } from "@models/directives/interface/types/IInterfaceModel";
import { IInterfaceWriter } from "@writers/directives/interfaceWriter/types/IInterfaceWriter";
import { inject, injectable } from "tsyringe";
import { IGifflarInterface } from "../types/IGifflarInterface";
import { IGifflarInterfaceModel } from "../types/IGifflarInterfaceModel";

@injectable()
class GifflarInterfaceModel implements IGifflarInterfaceModel {
  constructor(
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

      write: (interfaces?: Array<IInterfaceJson>): string => {
        const _interfaces = interfaces || [gInterface];
        gInterface.code = this.interfaceWriter.write(_interfaces, () => {
          return "";
        });
        return gInterface.code;
      },

      compile: (callback: (errors: any) => void): any => {
        let errors;
        if (gInterface.code) {
          gInterface.json = this.compiler.compile(gInterface.code);
        }
        if (callback) {
          if (gInterface.json.errors) {
            errors = gInterface.json.errors;
          }

          callback(errors);
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
