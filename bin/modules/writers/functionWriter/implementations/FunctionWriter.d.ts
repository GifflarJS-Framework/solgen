import { IFunctionJson } from "../../../models/function/types/IFunctionJson";
import { IGlobalVariable } from "../../../models/globalVariable/types/IGlobalVariable";
import { ILocalVariable } from "../../../models/variable/types/ILocalVariable";
import { IContentWriter } from "../../contentWriter/types/IContentWriter";
import { IInputWriter } from "../../statements/inputWriter/types/IInputWriter";
import { IOutputWriter } from "../../statements/outputWriter/types/IOutputWriter";
import { IFunctionWriter } from "../types/IFunctionWriter";
declare class FunctionWriter implements IFunctionWriter {
    private contentWriter;
    private inputWriter;
    private outputWriter;
    constructor(contentWriter: IContentWriter, inputWriter: IInputWriter, outputWriter: IOutputWriter);
    _selectFunctionVariables(func: IFunctionJson): Array<ILocalVariable>;
    write(functions: Array<IFunctionJson>, variables: Array<IGlobalVariable>): string;
}
export default FunctionWriter;
