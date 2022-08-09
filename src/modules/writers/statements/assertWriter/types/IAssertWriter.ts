import { IAssert } from "@models/assert/types/IAssert";

export interface IAssertWriter {
  write(assert: IAssert): string;
}
