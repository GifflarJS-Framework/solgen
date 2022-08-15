import { IDoWhile } from "@models/dowhile/types/IDoWhile";
import { IContentWriter } from "@writers/contentWriter/types/IContentWriter";

export interface IDoWhileWriter {
  _init(contentWriter: IContentWriter): void;
  write(_doWhile: IDoWhile): string;
}
