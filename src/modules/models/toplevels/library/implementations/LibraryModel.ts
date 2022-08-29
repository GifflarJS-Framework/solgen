import { IContractBodyModel } from "@models/toplevels/contractBody/types/IContractBodyModel";
import { inject, injectable } from "tsyringe";
import { ILibrary } from "../types/ILibrary";
import { ILibraryItem } from "../types/ILibraryItem";
import { ILibraryJson } from "../types/ILibraryJson";
import { ILibraryModel } from "../types/ILibraryModel";

@injectable()
class LibraryModel implements ILibraryModel {
  constructor(
    @inject("ContractBodyModel")
    private contractBodyModel: IContractBodyModel
  ) {}

  execute(libraryName: string): ILibrary {
    // Body of the library (same as contract, but without constructor)
    const contractBody = this.contractBodyModel.execute();

    const library: ILibraryItem = {
      name: libraryName,
      ...contractBody.body,
    };

    const toJson = (): ILibraryJson => {
      const json = JSON.stringify({ library });
      return JSON.parse(json);
    };

    const _assignFunctions = (): ILibrary => {
      const _obj: ILibrary = {
        library,
        code: "",
        json: {},
        toJson,
        ...contractBody,
        toString: (): string => {
          return JSON.stringify({ library: _obj.library });
        },
      };

      return _obj;
    };

    const json: ILibrary = _assignFunctions();
    return json;
  }
}

export default LibraryModel;
