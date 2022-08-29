import { IRevert } from "../../../../models/statements/revert/types/IRevert";
export interface IRevertWriter {
    write(revert: IRevert): string;
}
