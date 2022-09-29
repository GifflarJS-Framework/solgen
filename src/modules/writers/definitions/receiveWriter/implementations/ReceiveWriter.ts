import { IReceive } from "@models/definitions/receive/types/IReceive";
import helpers from "@utils/helpers";
import { IContentWriter } from "@writers/definitions/contentWriter/types/IContentWriter";
import { inject, injectable } from "tsyringe";
import { IReceiveWriter } from "../types/IReceiveWriter";

@injectable()
class ReceiveWriter implements IReceiveWriter {
  constructor(
    @inject("ContentWriter")
    private contentWriter: IContentWriter
  ) {}

  write(receive: IReceive): string {
    const txt_content = this.contentWriter.write(receive.content);

    // Override text
    let txt_override = "";
    if (receive.overrides) txt_override = ` override`;

    // Virtual text
    let txt_virtual = "";
    if (receive.virtual) txt_virtual = ` virtual`;

    // Preparing modifiers text
    let txt_modifiers = "";
    if (receive.modifiers) {
      receive.modifiers.map((modifier) => {
        // Modifier name
        txt_modifiers += ` ${modifier.name}`;
        // Modifier args
        if (modifier.args) {
          txt_modifiers += `(${helpers.getCommaExpression(modifier.args)})`;
        }
      });
    }

    const text = `receive() external payable${txt_override}${txt_virtual}${txt_modifiers}{\n${txt_content}}\n\n`;

    return text;
  }
}

export default ReceiveWriter;
