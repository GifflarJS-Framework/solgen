import { IBreak } from "../types/IBreak";
import { IBreakModel } from "../types/IBreakModel";
declare class BreakModel implements IBreakModel {
    execute(): IBreak;
}
export default BreakModel;
