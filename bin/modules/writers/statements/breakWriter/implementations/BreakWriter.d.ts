import { IBreak } from "../../../../models/statements/break/types/IBreak";
import { IBreakWriter } from "../types/IBreakWriter";
declare class BreakWriter implements IBreakWriter {
    write(_break: IBreak): string;
}
export default BreakWriter;
