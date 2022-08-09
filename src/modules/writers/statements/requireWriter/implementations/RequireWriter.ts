import { IRequire } from "@models/require/types/IRequire";
import { IRequireWriter } from "../types/IRequireWriter";

class RequireWriter implements IRequireWriter {
  write(require: IRequire): string {
    let text = `require(${require.condition}`;
    if (require.errorMessage) {
      text = text.concat(`, "${require.errorMessage}");`);
    } else {
      text = text.concat(`);`);
    }

    return text;
  }
}

export default RequireWriter;
