import { IContents } from "@models/definitions/content/types/IContents";
import { IIf } from "@models/statements/if/types/IIf";
import { IContentWriter } from "@writers/definitions/contentWriter/types/IContentWriter";

export interface IIfWriter {
  _init(contentWriter: IContentWriter): void;
  write(json: IIf): string;
}
