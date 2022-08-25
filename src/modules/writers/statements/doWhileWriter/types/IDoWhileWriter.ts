import { IDoWhile } from "@models/statements/dowhile/types/IDoWhile";
import { IContentWriter } from "@writers/definitions/contentWriter/types/IContentWriter";

export interface IDoWhileWriter {
  _init(contentWriter: IContentWriter): void;
  write(_doWhile: IDoWhile): string;
}
