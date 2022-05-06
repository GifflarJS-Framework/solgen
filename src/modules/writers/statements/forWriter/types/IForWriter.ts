import { IContents } from "@models/content/types/IContents";
import { IFor } from "@models/for/types/IFor";
import { IContentWriter } from "@writers/contentWriter/types/IContentWriter";

export interface IForWriter {
  _init(contentWriter: IContentWriter): void;
  write: (json: IFor) => string;
}
