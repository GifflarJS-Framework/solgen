import { IBreak } from "@models/statements/break/types/IBreak";
import { IBreakWriter } from "../types/IBreakWriter";

class BreakWriter implements IBreakWriter {
  write(_break: IBreak): string {
    return "break";
  }
}

export default BreakWriter;
