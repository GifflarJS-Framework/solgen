import { IContents } from "@models/content/types/IContents";
import { IIf } from "@models/if/types/IIf";
import { IContentWriter } from "@writers/contentWriter/types/IContentWriter";

export interface IIfWriter {
  _init(contentWriter: IContentWriter): void;
  write(json: IIf): string;
}
