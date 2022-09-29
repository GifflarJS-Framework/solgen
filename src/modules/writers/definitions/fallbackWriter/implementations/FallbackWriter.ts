import { IFallback } from "@models/definitions/fallback/types/IFallback";
import helpers from "@utils/helpers";
import { IContentWriter } from "@writers/definitions/contentWriter/types/IContentWriter";
import { inject, injectable } from "tsyringe";
import { IFallbackWriter } from "../types/IFallbackWriter";

@injectable()
class FallbackWriter implements IFallbackWriter {
  constructor(
    @inject("ContentWriter")
    private contentWriter: IContentWriter
  ) {}

  write(fallback: IFallback): string {
    // If payable
    let txt_payable = "";
    if (fallback.isPayable) txt_payable = " payable";

    // Preparing modifiers text
    let txt_modifiers = "";
    if (fallback.modifiers) {
      fallback.modifiers.map((modifier) => {
        // Modifier name
        txt_modifiers += ` ${modifier.name}`;
        // Modifier args
        if (modifier.args) {
          txt_modifiers += `(${helpers.getCommaExpression(modifier.args)})`;
        }
      });
    }

    // Content
    const txt_content = this.contentWriter.write(fallback.content);

    // Final text
    const text = `fallback() external${txt_payable}${txt_modifiers}{\n${txt_content}}\n\n`;

    return text;
  }
}

export default FallbackWriter;
