import { IOutput } from "@modules/types/IOutput";

export interface IOutputWriter {
  write(outputs: Array<IOutput>): string;
}
