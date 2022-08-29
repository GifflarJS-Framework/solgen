import { IAssert } from "../../../../models/statements/assert/types/IAssert";
export interface IAssertWriter {
    write(assert: IAssert): string;
}
