import { IIf } from "@models/statements/if/types/IIf";
import { IContentWriter } from "@writers/definitions/contentWriter/types/IContentWriter";
import { IIfWriter } from "../types/IIfWriter";

class IfWriter implements IIfWriter {
  private contentWriter: IContentWriter;

  constructor() {}

  _init(contentWriter: IContentWriter): void {
    this.contentWriter = contentWriter;
  }

  write(json: IIf) {
    if (!this.contentWriter) throw new Error("Content Writer not set.");

    let text = `if(${json.condition})`;
    // if else is turned on
    if (!json.condition) {
      // If no condition setted
      text = "else";
    } else if (json.else) {
      // if there is a condition and else = true (else if), if there isn't (else)
      text = `else ${text}`;
    }
    text += "{\n";
    text += this.contentWriter.write(json.content);
    text += "}\n";

    return text;
  }
}

export default IfWriter;
