import { ICatch } from "@models/statements/catch/types/ICatch";
import { IContentWriter } from "@writers/definitions/contentWriter/types/IContentWriter";

export interface ICatchWriter {
  _init(contentWriter: IContentWriter): void;
  write(_catch: ICatch): string;
}
