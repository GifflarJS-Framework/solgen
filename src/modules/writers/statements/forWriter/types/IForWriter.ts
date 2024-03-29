import { IFor } from "@models/statements/for/types/IFor";
import { IContentWriter } from "@writers/definitions/contentWriter/types/IContentWriter";

export interface IForWriter {
  _init(contentWriter: IContentWriter): void;
  write: (json: IFor) => string;
}
