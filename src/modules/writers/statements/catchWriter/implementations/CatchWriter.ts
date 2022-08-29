import { ICatch } from "@models/statements/catch/types/ICatch";
import { IContentWriter } from "@writers/definitions/contentWriter/types/IContentWriter";
import { IInputWriter } from "@writers/statements/inputWriter/types/IInputWriter";
import { inject, injectable } from "tsyringe";
import { ICatchWriter } from "../types/ICatchWriter";

@injectable()
class CatchWriter implements ICatchWriter {
  private contentWriter: IContentWriter;

  constructor(
    @inject("InputWriter")
    private inputWriter: IInputWriter
  ) {}

  _init(contentWriter: IContentWriter): void {
    this.contentWriter = contentWriter;
  }

  write(_catch: ICatch): string {
    // Writing parameters
    const parametersText = this.inputWriter.write(_catch.parameters);

    // Writing content
    const contentText = this.contentWriter.write(_catch.content);

    // Writing final text
    const text = `catch ${
      _catch.identifier || ""
    }(${parametersText}){\n${contentText}}`;

    return text;
  }
}

export default CatchWriter;
