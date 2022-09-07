import { IAssignment } from "../types/IAssignment";
import { IAssignmentDTO } from "../types/IAssignmentDTO";
import { IAssignmentModel } from "../types/IAssignmentModel";

class AssignmentModel implements IAssignmentModel {
  execute({ variable, expressionValue }: IAssignmentDTO): IAssignment {
    const assignment: IAssignment = {
      statement: "assignment",
      variable,
      expressionValue,
    };

    return assignment;
  }
}
export default AssignmentModel;
