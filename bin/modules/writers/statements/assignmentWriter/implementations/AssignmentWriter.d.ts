import { IAssignment } from "../../../../models/statements/assignment/types/IAssignment";
import { IExpressionModel } from "../../../../models/statements/expression/types/IExpressionModel";
import { IExpressionWriter } from "../../expressionWriter/types/IExpressionWriter";
import { IAssignmentWriter } from "../types/IAssignmentWriter";
declare class AssignmentWriter implements IAssignmentWriter {
    private expressionModel;
    private expressionWriter;
    constructor(expressionModel: IExpressionModel, expressionWriter: IExpressionWriter);
    write(json: IAssignment): string;
}
export default AssignmentWriter;
