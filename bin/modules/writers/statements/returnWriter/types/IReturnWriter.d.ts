import { IReturn } from "../../../../models/statements/return/types/IReturn";
export interface IReturnWriter {
    write(_return: IReturn): string;
}
