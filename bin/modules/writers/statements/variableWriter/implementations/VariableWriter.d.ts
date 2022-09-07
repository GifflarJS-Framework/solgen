import { ILocalVariable } from "../../../../models/statements/variable/types/ILocalVariable";
import { IExpressionModel } from "../../../../models/statements/expression/types/IExpressionModel";
import { IExpressionWriter } from "../../expressionWriter/types/IExpressionWriter";
import { IVariableWriter } from "../types/IVariableWriter";
declare class VariableWriter implements IVariableWriter {
    private expressionModel;
    private expressionWriter;
    constructor(expressionModel: IExpressionModel, expressionWriter: IExpressionWriter);
    write(variable: ILocalVariable): string;
}
export default VariableWriter;
