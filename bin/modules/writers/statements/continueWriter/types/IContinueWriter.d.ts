import { IContinue } from "../../../../models/statements/continue/types/IContinue";
export interface IContinueWriter {
    write(_continue: IContinue): string;
}
