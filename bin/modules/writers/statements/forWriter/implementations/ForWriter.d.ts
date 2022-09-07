import { IFor } from "../../../../models/statements/for/types/IFor";
import { IExpressionModel } from "../../../../models/statements/expression/types/IExpressionModel";
import { IContentWriter } from "../../../definitions/contentWriter/types/IContentWriter";
import { IExpressionWriter } from "../../expressionWriter/types/IExpressionWriter";
import { IVariableWriter } from "../../variableWriter/types/IVariableWriter";
import { IForWriter } from "../types/IForWriter";
declare class ForWriter implements IForWriter {
    private variableWriter;
    private expressionWriter;
    private expressionModel;
    private contentWriter;
    constructor(variableWriter: IVariableWriter, expressionWriter: IExpressionWriter, expressionModel: IExpressionModel);
    _init(contentWriter: IContentWriter): void;
    write(json: IFor): string;
}
export default ForWriter;
