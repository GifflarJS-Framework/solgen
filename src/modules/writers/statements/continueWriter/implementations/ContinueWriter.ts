import { IContinue } from "@models/statements/continue/types/IContinue";
import { IContinueWriter } from "../types/IContinueWriter";

class ContinueWriter implements IContinueWriter {
  write(_continue: IContinue): string {
    const text = `continue`;
    return text;
  }
}

export default ContinueWriter;
