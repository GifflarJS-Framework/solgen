import { IImport } from "../../../../models/toplevels/import/types/IImport";
import { IImportWriter } from "../types/IImportWriter";
declare class ImportWriter implements IImportWriter {
    write(_imports: Array<IImport>): string;
}
export default ImportWriter;
