import { IBreak } from "@models/break/types/IBreak";

export interface IBreakWriter {
  write(_break: IBreak): string;
}
