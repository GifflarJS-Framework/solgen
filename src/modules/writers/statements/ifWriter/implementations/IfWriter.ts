import { IIf } from "@models/if/types/IIf";
import { inject, injectable } from "tsyringe";
import { IIfWriter } from "../types/IIfWriter";

interface IFakeContentWriter {
  write(obj: any): string;
}

@injectable()
class createIfWriter implements IIfWriter {
  // TODO: Corrigir contentWriter
  constructor(
    @inject("ContentWriter")
    private contentWriter: IFakeContentWriter
  ) {}

  write(json: IIf) {
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

export default createIfWriter;
