import { IWhile } from "@models/while/types/IWhile";
import { IContentWriter } from "@writers/contentWriter/types/IContentWriter";

export interface IWhileWriter {
  _init(contentWriter: IContentWriter): void;
  write(_while: IWhile): string;
}
