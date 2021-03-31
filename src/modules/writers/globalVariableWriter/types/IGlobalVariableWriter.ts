import { IContents } from "@models/content/types/IContents";
import { IRequest } from "@models/request/types/IRequest";

export interface IGlobalVariableWriter {
  write(
    variables: Array<IGlobalVariable>,
    callback: (request: IRequest) => void
  ): string;
}
