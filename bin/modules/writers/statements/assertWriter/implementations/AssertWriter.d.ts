import { IAssert } from "../../../../models/statements/assert/types/IAssert";
import { IAssertWriter } from "../types/IAssertWriter";
declare class AssertWriter implements IAssertWriter {
    write(assert: IAssert): string;
}
export default AssertWriter;
