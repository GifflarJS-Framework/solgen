import { IVariable } from "@models/variable/types/IVariable";
import { IOutputWriterCallbackObject } from "./IOutputWriterCallbackObject";

export interface IOutputWriter {
  write(
    outputs: Array<string>,
    variables: Array<IVariable>,
    callback: (object: IOutputWriterCallbackObject) => void
  ): string;
}
