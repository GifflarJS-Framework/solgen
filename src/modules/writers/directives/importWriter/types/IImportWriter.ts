import { IImport } from "@models/directives/import/types/IImport";

export interface IImportWriter {
  write(_import: Array<IImport>): string;
}
