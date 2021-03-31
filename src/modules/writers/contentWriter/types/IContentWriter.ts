import { IContents } from "@models/content/types/IContents";
import { IRequest } from "@models/request/types/IRequest";

export interface IContentWriter {
  write(
    content: Array<IContents>,
    callback: (request: IRequest) => void
  ): string;
}
