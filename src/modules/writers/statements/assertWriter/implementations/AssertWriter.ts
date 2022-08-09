import { IAssert } from "@models/assert/types/IAssert";
import { IAssertWriter } from "../types/IAssertWriter";

class AssertWriter implements IAssertWriter {
  write(assert: IAssert): string {
    const text = `assert(${assert.condition})`;
    return text;
  }
}

export default AssertWriter;
