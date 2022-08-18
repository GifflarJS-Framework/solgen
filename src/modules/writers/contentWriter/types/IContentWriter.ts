import { IContents } from "@models/content/types/IContents";

export interface IContentWriter {
  write(content: Array<IContents>): string;
}
