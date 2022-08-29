import { IFunctionJson } from "../../../../models/definitions/function/types/IFunctionJson";
import { IFunctionWriterOptions } from "./IFunctionWriterOptions";
export interface IFunctionWriter {
    write(functions: Array<IFunctionJson>, options?: IFunctionWriterOptions): string;
}
