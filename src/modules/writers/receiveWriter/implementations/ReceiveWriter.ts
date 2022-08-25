import { IReceive } from "@models/receive/types/IReceive";
import { IContentWriter } from "@writers/contentWriter/types/IContentWriter";
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

    const text = `receive() external payable{\n${txt_content}}\n\n`;

    return text;
  }
}

export default ReceiveWriter;
