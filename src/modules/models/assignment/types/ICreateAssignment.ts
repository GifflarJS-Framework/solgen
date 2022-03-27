import { IAssignment } from "./IAssignment";
import { IAssignmentDTO } from "./IAssignmentDTO";

export interface ICreateAssignment {
  ({ variable, value }: IAssignmentDTO): IAssignment;
}
