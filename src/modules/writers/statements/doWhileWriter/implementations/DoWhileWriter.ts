import { IDoWhile } from "@models/dowhile/types/IDoWhile";
import { IContentWriter } from "@writers/contentWriter/types/IContentWriter";
import { IDoWhileWriter } from "../types/IDoWhileWriter";

class DoWhileWriter implements IDoWhileWriter {
  private contentWriter: IContentWriter;

  _init(contentWriter: IContentWriter): void {
    this.contentWriter = contentWriter;
  }

  write(_doWhile: IDoWhile): string {
    if (!this.contentWriter) throw new Error("Content Writer not set.");

    let text = `do {\n${this.contentWriter.write(_doWhile.content)}} `;
    text += `while(${_doWhile.condition})`;

    return text;
  }
}

export default DoWhileWriter;
