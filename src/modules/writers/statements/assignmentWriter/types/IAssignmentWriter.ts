import { IAssignment } from "@models/assignment/types/IAssignment";

export interface IAssignmentWriter {
  write(json: IAssignment): string;
}
