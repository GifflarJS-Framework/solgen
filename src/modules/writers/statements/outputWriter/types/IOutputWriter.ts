import { IOutput } from "@models/function/types/IOutput";

export interface IOutputWriter {
  write(outputs: Array<IOutput>): string;
}
