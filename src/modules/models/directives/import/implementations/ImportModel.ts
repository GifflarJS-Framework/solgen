import { ICreateImportDTO } from "../types/ICreateImportDTO";
import { IImport } from "../types/IImport";
import { IImportModel } from "../types/IImportModel";

class ImportModel implements IImportModel {
  execute({ identifierPath, alias }: ICreateImportDTO): IImport {
    const _import = {
      identifierPath,
      alias,
    };

    return _import;
  }
}

export default ImportModel;
