import { IAssignment } from "../../../../models/assignment/types/IAssignment";
import { IExpressionWriter } from "../../expressionWriter/types/IExpressionWriter";
import { IAssignmentWriter } from "../types/IAssignmentWriter";
declare class AssignmentWriter implements IAssignmentWriter {
    private expressionWriter;
    constructor(expressionWriter: IExpressionWriter);
    write(json: IAssignment): string;
}
export default AssignmentWriter;
