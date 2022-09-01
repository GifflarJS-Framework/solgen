import { IFor } from "../../../../models/statements/for/types/IFor";
import { IContentWriter } from "../../../definitions/contentWriter/types/IContentWriter";
import { IExpressionWriter } from "../../expressionWriter/types/IExpressionWriter";
import { IVariableWriter } from "../../variableWriter/types/IVariableWriter";
import { IForWriter } from "../types/IForWriter";
declare class ForWriter implements IForWriter {
    private variableWriter;
    private expressionWriter;
    private contentWriter;
    constructor(variableWriter: IVariableWriter, expressionWriter: IExpressionWriter);
    _init(contentWriter: IContentWriter): void;
    write(json: IFor): string;
}
export default ForWriter;
