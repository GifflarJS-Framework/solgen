import { IContents } from "@models/content/types/IContents";
import { IIf } from "@models/if/types/IIf";
import { IIfWriter } from "../types/IIfWriter";

class IfWriter implements IIfWriter {
  private writeContent: (content: Array<IContents>) => string;

  constructor() {}

  _init(_writeContent: (content: Array<IContents>) => string): void {
    this.writeContent = _writeContent;
  }

  write(json: IIf) {
    if (!this.writeContent) throw new Error("writeContent Function not set.");

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
    text += this.writeContent(json.content);
    text += "}\n";

    return text;
  }
}

export default IfWriter;
