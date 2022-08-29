import { IBreak } from "../../../../models/statements/break/types/IBreak";
export interface IBreakWriter {
    write(_break: IBreak): string;
}
