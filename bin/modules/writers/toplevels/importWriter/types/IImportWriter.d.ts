import { IImport } from "../../../../models/toplevels/import/types/IImport";
export interface IImportWriter {
    write(_import: Array<IImport>): string;
}
