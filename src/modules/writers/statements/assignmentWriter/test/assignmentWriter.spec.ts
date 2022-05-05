import { IAssignment } from "@models/assignment/types/IAssignment";
import { container } from "tsyringe";
import { IAssignmentWriter } from "../types/IAssignmentWriter";

describe("Assignment Writer", () => {
  it("Writing Assignment", () => {
    const assignmentWriter: IAssignmentWriter =
      container.resolve("AssignmentWriter");
    const assignment: IAssignment = {
      statement: "assignment",
      variable: "age",
      value: {
        statement: "expression",
        value: "20",
      },
    };

    const expected = "age = 20";
    const result = assignmentWriter.write(assignment);

    expect(result).toMatch(expected);
  });
});
