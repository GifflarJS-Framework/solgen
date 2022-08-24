import { IImport } from "@models/import/types/IImport";

export interface IImportWriter {
  write(_import: Array<IImport>): string;
}
