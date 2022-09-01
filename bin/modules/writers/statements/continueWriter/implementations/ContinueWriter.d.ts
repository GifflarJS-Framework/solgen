import { IContinue } from "../../../../models/statements/continue/types/IContinue";
import { IContinueWriter } from "../types/IContinueWriter";
declare class ContinueWriter implements IContinueWriter {
    write(_continue: IContinue): string;
}
export default ContinueWriter;
