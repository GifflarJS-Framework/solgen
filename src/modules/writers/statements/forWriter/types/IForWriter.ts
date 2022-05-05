import { IContents } from "@models/content/types/IContents";
import { IFor } from "@models/for/types/IFor";

export interface IForWriter {
  _init(_writeContent: (content: Array<IContents>) => string): void;
  write: (json: IFor) => string;
}
