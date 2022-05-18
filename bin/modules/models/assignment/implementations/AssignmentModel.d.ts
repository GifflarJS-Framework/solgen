import { IAssignment } from "../types/IAssignment";
import { IAssignmentDTO } from "../types/IAssignmentDTO";
import { IAssignmentModel } from "../types/IAssignmentModel";
declare class AssignmentModel implements IAssignmentModel {
    execute({ variable, value }: IAssignmentDTO): IAssignment;
}
export default AssignmentModel;
