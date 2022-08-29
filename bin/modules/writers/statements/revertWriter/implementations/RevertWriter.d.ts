import { IRevert } from "../../../../models/statements/revert/types/IRevert";
import { IRevertWriter } from "../types/IRevertWriter";
declare class RevertWriter implements IRevertWriter {
    write(revert: IRevert): string;
}
export default RevertWriter;
