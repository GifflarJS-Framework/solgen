import { ICreateImportDTO } from "./ICreateImportDTO";
import { IImport } from "./IImport";
export interface IImportModel {
    execute(data: ICreateImportDTO): IImport;
}
