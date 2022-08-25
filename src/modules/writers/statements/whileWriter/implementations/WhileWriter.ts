import { IWhile } from "@models/statements/while/types/IWhile";
import { IContentWriter } from "@writers/definitions/contentWriter/types/IContentWriter";
import { IWhileWriter } from "../types/IWhileWriter";

class WhileWriter implements IWhileWriter {
  private contentWriter: IContentWriter;

  _init(contentWriter: IContentWriter): void {
    this.contentWriter = contentWriter;
  }

  write(_while: IWhile): string {
    if (!this.contentWriter) throw new Error("Content Writer not set.");

    let text = `while(${_while.condition}){\n`;
    text += `${this.contentWriter.write(_while.content)}}\n`;

    return text;
  }
}

export default WhileWriter;
