import { ICreateImportDTO } from "../types/ICreateImportDTO";
import { IImport } from "../types/IImport";
import { IImportModel } from "../types/IImportModel";
declare class ImportModel implements IImportModel {
    execute({ identifierPath, alias }: ICreateImportDTO): IImport;
}
export default ImportModel;
