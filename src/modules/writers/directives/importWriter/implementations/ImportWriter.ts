import { IImport } from "@models/directives/import/types/IImport";
import { IImportWriter } from "../types/IImportWriter";

class ImportWriter implements IImportWriter {
  write(_imports: Array<IImport>): string {
    let text = ``;

    _imports.map((_import) => {
      text += `import "${_import.identifierPath}"`;
      if (_import.alias) {
        text += ` as ${_import.alias}`;
      }
      text += `;\n`;
    });

    if (_imports.length) text += `\n`;

    return text;
  }
}

export default ImportWriter;
