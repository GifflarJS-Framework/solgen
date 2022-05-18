import { IFor } from "../../../../models/for/types/IFor";
import { IContentWriter } from "../../../contentWriter/types/IContentWriter";
import { IAssignmentWriter } from "../../assignmentWriter/types/IAssignmentWriter";
import { IExpressionWriter } from "../../expressionWriter/types/IExpressionWriter";
import { IForWriter } from "../types/IForWriter";
declare class ForWriter implements IForWriter {
    private assignmentWriter;
    private expressionWriter;
    private contentWriter;
    constructor(assignmentWriter: IAssignmentWriter, expressionWriter: IExpressionWriter);
    _init(contentWriter: IContentWriter): void;
    write(json: IFor): string;
}
export default ForWriter;
