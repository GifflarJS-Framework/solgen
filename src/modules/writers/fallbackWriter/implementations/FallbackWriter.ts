import { IFallback } from "@models/fallback/types/IFallback";
import { IContentWriter } from "@writers/contentWriter/types/IContentWriter";
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

    // Content
    const txt_content = this.contentWriter.write(fallback.content);

    // Final text
    const text = `fallback() external${txt_payable}{\n${txt_content}}\n\n`;

    return text;
  }
}

export default FallbackWriter;
