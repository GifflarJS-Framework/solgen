import { IAssignment } from "./IAssignment";
import { IAssignmentDTO } from "./IAssignmentDTO";
export interface IAssignmentModel {
    execute({ variable, value }: IAssignmentDTO): IAssignment;
}
