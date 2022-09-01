import { IReturn } from "../../../../models/statements/return/types/IReturn";
import { IReturnWriter } from "../types/IReturnWriter";
declare class ReturnWriter implements IReturnWriter {
    write(_return: IReturn): string;
}
export default ReturnWriter;
