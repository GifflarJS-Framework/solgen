import { IContents } from "@models/content/types/IContents";
import { IIf } from "@models/if/types/IIf";

export interface IIfWriter {
  _init(_writeContent: (content: Array<IContents>) => string): void;
  write(json: IIf): string;
}
