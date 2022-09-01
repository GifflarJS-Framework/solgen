import { IAssignment } from "../../../../models/statements/assignment/types/IAssignment";
export interface IAssignmentWriter {
    write(json: IAssignment): string;
}
