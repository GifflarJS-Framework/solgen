import { IRevert } from "@models/revert/types/IRevert";

export interface IRevertWriter {
  write(revert: IRevert): string;
}
