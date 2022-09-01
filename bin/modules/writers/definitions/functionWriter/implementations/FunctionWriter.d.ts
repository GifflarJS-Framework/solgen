import { IFunctionJson } from "../../../../models/definitions/function/types/IFunctionJson";
import { ILocalVariable } from "../../../../models/statements/variable/types/ILocalVariable";
import { IContentWriter } from "../../contentWriter/types/IContentWriter";
import { IInputWriter } from "../../../statements/inputWriter/types/IInputWriter";
import { IOutputWriter } from "../../../statements/outputWriter/types/IOutputWriter";
import { IFunctionWriter } from "../types/IFunctionWriter";
import { IFunctionWriterOptions } from "../types/IFunctionWriterOptions";
declare class FunctionWriter implements IFunctionWriter {
    private contentWriter;
    private inputWriter;
    private outputWriter;
    constructor(contentWriter: IContentWriter, inputWriter: IInputWriter, outputWriter: IOutputWriter);
    _selectFunctionVariables(func: IFunctionJson): Array<ILocalVariable>;
    write(functions: Array<IFunctionJson>, options?: IFunctionWriterOptions): string;
}
export default FunctionWriter;
